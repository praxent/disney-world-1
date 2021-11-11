import React, {useState} from 'react';
import styled from "styled-components";
import PirateMap from "./images/PiratesOfTheCaribbeanMap.png";
import PirateBoat from "./images/PirateBoat.png";
const Styles = styled.div`
  color: White;
  
  button {
    background-color: #000;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    Margin: 50px;
  }

  .container {
    max-width: 100vh;
    text-align: center;
    margin: 0 auto;
    color:fff;
    font-size: 50px;
  }

  body {
    position: relative;
    overflow-x: hidden;
  }
  
  .movingBoat {
    position: absolute;
    animation: moveImage 5s linear infinite;
  }
  
  @keyframes moveImage {
      100% {
        transform: translateX(calc(100vw + 350px))  translatey(1200px);
      }
  }
`;


function Activity1() {
  const [rideStart, setRideStatus] = useState(false);
  return (
    
    <Styles>
      <div style={{ backgroundImage:`url(${PirateMap})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width:'100hw',
      height: '100vh'
      }}>
        <div className="container">
          Welcome to Pirates Of The Caribbean Ride
        </div>
        <button onClick={() => setRideStatus(!rideStart)}>
          {rideStart && "Stop Ride" }
          {!rideStart && "Start Ride" }
        </button>
        <div>
        {!rideStart && <img src= {PirateBoat} alt="PirateBoat" style = {{width:'200px', margin: '50px'}} />}
        {rideStart && <img className="movingBoat" src= {PirateBoat} alt="PirateBoat" style = {{width:'200px', margin: '50px'}} />}
        </div>
      </div>
    </Styles>
  )
}

export default Activity1