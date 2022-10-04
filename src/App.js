import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("myBox").style.backgroundColor = "black";
      document.getElementById("myBox").style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#eaeaec";
      document.body.style.color = "black";
      document.getElementById("myBox").style.backgroundColor = "white";
      document.getElementById("myBox").style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Textform mode={mode} />
        </div>
        <Footer mode={mode} />
      </Router>
    </>
  );
}
export default App;
