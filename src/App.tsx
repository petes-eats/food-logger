import React from "react";
import logo from "./logo.svg";
import Routes from "./routes";
import LandingPage from "./components/landingPage";

import "./App.css";
import Header from "./components/common/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
