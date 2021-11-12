import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import styled from "styled-components";

const Styles = styled.div`
  color: White;

  .spell {
    background-color: #000;
    color: white;
    padding: 10px 15px;
    display: inline-block;
    font-size: 18px;
    margin: 20px;
    border: 1px solid white;  
    border-radius: 10px
  }

  .center {
    margin: auto;
    padding: 10px;
    text-align: center;
  }
`;

function MenuActivity3() {
  return (
    <Styles>
      <Grid className="center">
      <Button
          as={NavLink}
          to="./Hogwarts"
          content="Go to Hogwarts"
          className="spell"
        />
        <Button
          as={NavLink}
          to="./DarkSpell"
          content="Dark Spell"
          className="spell"
        />
        <Button
          as={NavLink}
          to="./LightningSpell"
          content="Lightning Spell"
          className="spell"
        />
        <Button
          as={NavLink}
          to="./WaterSpell"
          content="Water Spell"
          className="spell"
        />
        <Button
          as={NavLink}
          to="./FireSpell"
          content="Fire Spell"
          className="spell"
        />
      </Grid>
    </Styles>
  );
}

export default MenuActivity3;
