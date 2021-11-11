import React, { useState } from 'react';
import styled from "styled-components";

import target from "./images/target.png";
import splash from "./images/red_splash.png";

const Styles = styled.div`
  color: Blue;

  .container{
    width:900px;
    margin: 0 auto; 
    text-align:center;
    position:relative;
}
 
  .target {
    height: 400px;
    width: 400px;
    display:block;
    margin:auto;
    position:relative;
  }

  .splash {
    height: 45px;
    width: 45px;
    position:absolute;
    float: center;
    margin:auto;
    top: 245px;
    left: 430px;
  }
`;
 
function Activity1() {
  const [visible, setVisible] = React.useState(false);
  return (

    <Styles>
      <div className="container">
        <h1>Activity 1</h1>
        <div>
          <img className="target" src={target} alt="target" />
          {visible && <img className="splash" src={splash} alt="splash" />}
        </div>
        <div>
          <button onClick={() => setVisible(!visible)}>
            {visible ? 'Shoot' : 'Shoot'}
          </button>

        </div>
      </div>
    </Styles>
  )
}

export default Activity1