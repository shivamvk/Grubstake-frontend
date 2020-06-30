import React, { useRef, useState, useEffect } from "react";

import "./ImageUpload.css";
import Button from "./Button";

const ImageUpload = (props) => {
  const [previewUrl, setPreviewUrl] = useState();
  const [file, setFile] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  return (
    <div className="image-upload__form-control">
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpeg,.png,.jpg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div
          style={{ cursor: "pointer" }}
          onClick={pickImageHandler}
          className="image-upload__preview"
        >
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && (
            <p
              style={{
                marginTop: "10rem",
                backgroundColor: "lightskyblue",
                marginLeft: "2rem",
                marginRight: "2rem",
                borderRadius: "1rem",
              }}
            >
              {props.placeholderText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
