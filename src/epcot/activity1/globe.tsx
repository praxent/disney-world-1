import React from 'react'
import styled from "styled-components"

import spaceShipEarth from "../assets/img/Epcot-Spaceship-Earth-Fountain-Leave-a-Legacy.jpeg"
import spaceShipEarth2 from "../assets/img/n13_disney_epcot_spaceship_earth_beacon_of_magic_ai.jpeg"

const GlobeBase = ({ className, riding }) => {
  return (
    <div className='epcot'>
      <div className={`${className}__container`}>
        {riding ? (
        <div className={`${className}__epcot-img-container`}>
          <img className={`${className}__epcot-img`} />
          </div>
            ) : (
              <div className={`${className}__epcot-img-container2`}>
              <img className={`${className}__epcot-img`}/>
              </div>
            )}
            
      </div>
    </div>
  )
}

const Globe = styled(GlobeBase)`
  &__container {
    color: red;
    max-width: 900px;
    margin: 0 auto;
  }

  &__epcot-img-container {
    position: relative;
    &:before {
      width: 100%;
      height: 100%;
      display: block;
    }

    & > img {
      content: url(${spaceShipEarth});
      display: block;
      width: 100%;
      cursor: pointer;
    }
  }

  &__epcot-img-container2 {
    position: relative;
    &:before {
      width: 100%;
      height: 100%;
      display: block;
    }

    & > img {
      content: url(${spaceShipEarth2});
      display: block;
      width: 100%;
      cursor: pointer;
    }
  }
  
`
export default Globe