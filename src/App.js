import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Cursor from "./Components/Cursor";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Lobby from "./Components/Lobby/Lobby";
import Room from './Components/Lobby/Room';
import Courses from "./Components/Courses";
import CoursePage from "./Components/CoursePage";
import GetMaps from "./Components/GetMaps";

function App() {
  const [isDomRendered, setIsDomRendered] = useState(false);
  useEffect(() => {
      setIsDomRendered(true);
  },[]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/Courses/:CoursePage" element={<CoursePage />} />
        <Route path="/Lobby" element={<Lobby/>}/>
        <Route path="/room/:room" element={<Room/>}/>
        <Route path="/maps" element={<GetMaps/>}/>

      </Routes>
      {isDomRendered? <Cursor />:null}
    </>
  );
}

export default App;
