import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Hero2 from "./Components/Hero2";
import {HashRouter} from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Hero2/>
    </>
  );
}

export default App;
