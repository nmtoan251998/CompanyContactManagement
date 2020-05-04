import React from "react";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
