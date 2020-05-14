import React, { useEffect } from "react";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const initialContext = {
  user: null,
};

export const AppContext = React.createContext(initialContext);

function App() {
  const [user, setUser] = React.useState();

  useEffect(() => {
    const localUser = localStorage.getItem("asdfoiwehfo");
    if (localUser && localUser !== 'undefined') {
      setUser(JSON.parse(localUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("asdfoiwehfo", JSON.stringify(user));
    }
  }, [user]);

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
