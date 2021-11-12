import React, { useState } from 'react';
import styled from "styled-components";

import chimpanzee from "./images/chimpanzee.png";
import giraffe from "./images/giraffe.png";
import lion from "./images/lion.png";
import zebra from "./images/zebra.png";
import fence from "./images/fence.png";
const Styles = styled.div`
  color: green;

  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center
  }

  .image {
    top: 80px;
    height: 350px;
    width: 350px;
    display:block;
    margin:auto;
    position:relative;
  }

  .splash {
    height: 500px;
    width: 500px;
    position:absolute;
    float: center;
    margin:auto;
    top: 155px;
    left: 700px;
  }

  .divider{
    height: 10px;
    width:5px;
    height:auto;
    display:inline-block;
}
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 30px;
  text-align: center;
  font-size: 12px;
  margin: 4px 2px;
 
}
`;

const visitAnimals = {
  chimpanzee: {
    img: chimpanzee,
  },
  giraffe: {
    img: giraffe,
  },
  lion: {
    img: lion,
  },
  zebra: {
    img: zebra,
  }
}

function Activity3() {
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  return (
    <Styles>
      <div className="container">
        <h1>Activity 3</h1>
        <h2>Walking around the Zoo</h2>

        <div>
          <button className="button"  onClick={() => setSelectedAnimal(visitAnimals.lion)}> Visit Lion</button>
          <div className="divider" />
          <button  className="button" onClick={() => setSelectedAnimal(visitAnimals.zebra)}> Visit Zebra</button>
          <div className="divider" />
          <button  className="button" onClick={() => setSelectedAnimal(visitAnimals.giraffe)}> Visit Giraffe</button>
          <div className="divider" />
          <button className="button"  onClick={() => setSelectedAnimal(visitAnimals.chimpanzee)}> Visit Chimpanzee</button>
        </div>
        <div className="divider" />

        {selectedAnimal ?
          <div>
            <img className="image" src={selectedAnimal.img} alt="target" />
            <img className="splash" src={fence} alt="target" />
          </div>
          : null}

      </div>
    </Styles>
  )
}

export default Activity3