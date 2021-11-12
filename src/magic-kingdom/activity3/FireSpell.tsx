import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import FireSpellGif from "./images/FireSpell.gif";

const Styles = styled.div`
  color: White;
  .center {
    margin: auto;
    padding: 100px 10px;
    text-align: center;
  }
`;

function FireSpell() {
  return (
    <Styles>
      <Grid className="center">
        <Image src={`${FireSpellGif}`} />
      </Grid>
    </Styles>
  );
}

export default FireSpell;
