import React, { useState } from 'react';
import styled from "styled-components";


const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity1() {

    //let riding: Boolean = useState(true);
    const [isDownSlide, setIsDownSlide] = useState();

  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Blizzard Beach
      </div>
      <div className="container">
          Pic
          <img src="https://45ijagbx6du4albwj3e23cj1-wpengine.netdna-ssl.com/wp-content/uploads/universal-orlando-water-slide-lawsuit-1080x675.jpg"/>
      </div>
    </Styles>
  )
}

export default Activity1