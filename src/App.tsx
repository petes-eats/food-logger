import React from "react";
import logo from "./logo.svg";
import Routes from "./routes";

import "./App.css";
import Header from "./components/common/header";

const App = (): any => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
