import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import Hagrid from "../../../captain-only/images/hagrid.jpg";

const Styles = styled.div`
  color: White;
  .center {
    margin: auto;
    padding: 10px;
    text-align: center;
  }
`;

function Hogwarts() {
  
  return (
    <Styles>
      <Image src={`${Hagrid}`} />
      <h2>
        Are you ready to put your knowledge to test versus HE WHO SHOULD NOT BE NAMED.
        <br />
        Try one spell and let’s see?
      </h2>

    </Styles>
  );
}

export default Hogwarts;
