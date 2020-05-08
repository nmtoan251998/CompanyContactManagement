import React from "react";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const initialContext = {
  user: null,
};

export const AppContext = React.createContext(initialContext);

function App() {
  const [user, setUser] = React.useState();

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
