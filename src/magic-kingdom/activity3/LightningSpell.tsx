import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import LightningSpellGif from "./images/LightningSpell.gif";

const Styles = styled.div`
  color: White;
  .center {
    margin: auto;
    padding: 10px;
    text-align: center;
  }
`;

function LightningSpell() {
  return (
    <Styles>
      <Grid className="center">
        <Image src= {`${LightningSpellGif}`} />
      </Grid>
    </Styles>
  );
}
export default LightningSpell;
