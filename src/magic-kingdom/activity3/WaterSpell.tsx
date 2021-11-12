import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import WaterSpellGif from "./images/WaterSpell.gif";

const Styles = styled.div`
  color: White;
  .center {
    margin: auto;
    padding: 100px 10px;
    text-align: center;
  }
`;

function WaterSpell() {
  return (
    <Styles>
      <Grid className="center">
        <Image src= {`${WaterSpellGif}`} />
      </Grid>
    </Styles>
  );
}
export default WaterSpell;
