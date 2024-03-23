import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

import {Route ,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Hero/>}/>
      </Routes>
    </>
  );
}

export default App;
