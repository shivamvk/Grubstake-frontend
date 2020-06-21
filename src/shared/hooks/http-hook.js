import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        const httpAbortControl = new AbortController();
        activeHttpRequests.current.push(httpAbortControl);

        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortControl.signal,
        });

        const data = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqControl) => reqControl !== httpAbortControl
        );

        console.log(url + ": " + method + "--> Response" + data);

        if (!response.ok) {
          throw new Error(data.message);
        }

        if (data.metadata.error) {
          setErrorMessage(data.error.message);
          setIsLoading(false);
          return null;
        }

        setIsLoading(false);
        return data;
      } catch (err) {
        setErrorMessage(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setErrorMessage(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortController) =>
        abortController.abort()
      );
    };
  }, []);

  return [
    isLoading,
    { message: errorMessage, setErrorMessage: setErrorMessage },
    sendRequest,
    clearError,
  ];
};
