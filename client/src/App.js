import React, { useState } from "react";
// import logo from './logo.svg';
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  const handleClick = () => {
    console.log("I am the handleClick");
    axios
      .get("/test")
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => console.log("FINALLY HERE"));
  };

  return (
    <div>
      <Navbar />
      <form>
        <input type="text"></input>
        <button onClick={handleClick}>Click Me</button>
      </form>
    </div>
  );
}

export default App;
