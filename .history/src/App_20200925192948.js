import React from "react";
import "./App.css";
import Game from "./Components/Game";
import Header from "./Components/Header"
// import { ProgressPlugin } from "webpack";

//test

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
