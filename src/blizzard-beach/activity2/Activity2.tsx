import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .box {
  width: 80%;
  //height: 200px;
  height: 80%;
  //border: 5px dashed #f7a239;
  object-fit: cover;
  }

img {
  width: 100%;
  height: 100%;}

`;

function Activity2() {

  useEffect(() => {
    fetch('http://localhost:4000/lottawatta_lodge')
    .then(response => response.json())
    .then(res => set_menu_data(res));
  });
  
  var [menu_data, set_menu_data] =  useState([]);


  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Blizzard Beach
      </div>
      <div className="box">
          <img src="https://sir.wdwnt.com/wdwnt.com/2021/03/Image-from-iOS-3-1116239-scaled.jpg"/>
      </div>
      <div>{menu_data.toString()}</div>
    </Styles>
  )
}

export default Activity2