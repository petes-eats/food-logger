import React from "react";
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
