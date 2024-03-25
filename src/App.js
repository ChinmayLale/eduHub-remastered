// import React from "react";
// import NavBar from "./Components/NavBar";
// import Hero from "./Components/Hero";
// import Cursor from "./Components/Cursor";
// import { Route, Routes } from "react-router-dom";
// function App() {

  

//   return (
//     <>
//       <NavBar />
//       <Cursor/>
//       <Routes>
//         <Route path="/" element={<Hero/>}/>

//       </Routes>
//     </>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Cursor from "./Components/Cursor";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
      {isDomRendered? <Cursor />:null}
    </>
  );
}

export default App;
