import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import India from "./component/APIcomponent/India";
import USA from "./component/APIcomponent/USA";
import Navbar from "./component/Navbar";
import Tech from "./component/APIcomponent/Tech";
import BBC from "./component/APIcomponent/BBC";
import Bitcoin from "./component/APIcomponent/Bitcoin";

// const Demoimg ="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<India />}/>
          <Route exact path="usa" element={<USA />} />
          <Route exact path="tech" element={<Tech />} />
          <Route exact path="bbc" element={<BBC />} />
          <Route exact path="bitcoin" element={<Bitcoin />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
