import React from "react";
import { Route, Routes } from "react-router";
import DarkSpell from "./DarkSpell";
import FireSpell from "./FireSpell";
import LightningSpell from "./LightningSpell";
import MenuActivity3 from "./MenuActivity3";
import WaterSpell from "./WaterSpell";
import Background from "./images/HarryBackground.jpg";
import styled from "styled-components";
import Hogwarts from "./Hogwarts";


const Styles = styled.div`
  color: White;
  font-size: 1.2em;

  .spell {
    background-color: #000;
    color: white;
    padding: 10px 15px;
    display: inline-block;
    font-size: 18px;
    margin: 20px;
    border: 1px solid white;
    border-radius: 10px;
  }

  .container {
    margin: auto;
    padding: 10px;
    text-align: center;
  }
  h1 {
    -webkit-text-stroke: 1px black;
  }
`;

function Activity3() {
  return (
    
    <Styles>
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100hw",
          height: "100vh",
        }}
      >
        
        <h1>Welcome to Hogwarts little wizards</h1>
        
        <MenuActivity3 />
        <Routes>
          <Route path="/" element={<Hogwarts />} />
          <Route path="/Hogwarts" element={<Hogwarts />} />
          <Route path="/DarkSpell" element={<DarkSpell />} />
          <Route path="/FireSpell" element={<FireSpell />} />
          <Route path="/WaterSpell" element={<WaterSpell />} />
          <Route path="/LightningSpell" element={<LightningSpell />} />
        </Routes>
      </div>
    </Styles>
  );
}

export default Activity3;
