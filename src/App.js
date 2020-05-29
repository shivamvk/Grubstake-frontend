import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
      </main>
    </Router>
  );
}

export default App;
