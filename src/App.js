import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./app.css";
import Header from "./assets/components/header/Header";
import MainColumn from "./assets/components/main-column/main-column";

const App = (props) => {
  return (
    <div>
      <Header title="Easy Weights" />
      <MainColumn />
    </div>
  );
};

export default App;
