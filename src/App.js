import "../src/globals/App.css";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import PolicyPage from "./components/pages/PolicyPage/PolicyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/policy-page" component={PolicyPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
