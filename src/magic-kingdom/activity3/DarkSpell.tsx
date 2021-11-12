import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import DarkSpellGif from "./images/DarkSpell.gif";

const Styles = styled.div`
  color: White;
  .center {
    margin: auto;
    padding: 100px 10px;
    text-align: center;
  }
`;

function DarkSpell() {
  return (
    <Styles>
      <Grid className="center">
        <Image src= {`${DarkSpellGif}`} />
      </Grid>
    </Styles>
  );
}

export default DarkSpell;
