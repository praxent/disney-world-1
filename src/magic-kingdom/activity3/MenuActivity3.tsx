import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import styled from "styled-components";

const Styles = styled.div`
  color: White;
  
  .spell {
    background-color: #000;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    Margin: 5px;
  }
`;

function MenuActivity3() {
  return (
    <Styles>
      <Button as={NavLink} to="./DarkSpell" content="Dark Spell" className='spell'/>
      <Button as={NavLink} to="./LightningSpell" content="Lightning Spell" className='spell'/>
      <Button as={NavLink} to="./WaterSpell" content="Water Spell" className='spell'/>
      <Button as={NavLink} to="./FireSpell" content="Fire Spell" className='spell'/>
    </Styles>
  );
}

export default MenuActivity3;
