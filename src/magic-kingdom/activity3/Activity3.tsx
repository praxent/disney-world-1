import React from "react";
import { Route, Routes } from "react-router";
import DarkSpell from "./DarkSpell";
import FireSpell from "./FireSpell";
import LightningSpell from "./LightningSpell";
import MenuActivity3 from "./MenuActivity3";
import WaterSpell from "./WaterSpell";

function Activity3() {
  return (
    <div className="container">
      <MenuActivity3 />
      <Routes>
        <Route path="/DarkSpell" element={<DarkSpell />} />
        <Route path="/FireSpell" element={<FireSpell />} />
        <Route path="/WaterSpell" element={<WaterSpell />} />
        <Route path="/LightningSpell" element={<LightningSpell />} />
      </Routes>
    </div>
  );
}

export default Activity3;
