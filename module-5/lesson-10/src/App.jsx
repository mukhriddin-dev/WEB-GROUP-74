import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { context } from "./context";
import Private from "./private/Private";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(useAuth());
  }, []);

  return (
    <>
      <context.Provider value={{auth}}>
        <Routes>
          <Route path="/" element={<Private />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </context.Provider>
    </>
  );
};

export default App;
