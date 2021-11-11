import React, { useState } from 'react'
import styled from "styled-components"

import Globe from "../activity1/Globe"

const Activity1Base = ({ className }) => {
  const [riding, setRiding] = useState(true)
  return (
    <div className='epcot'>
      <div className={`${className}__container`}>
        Hello from Activity 1 Epcot
        <div className={`${className}__container`}>
        <button onClick={() => setRiding(!riding)}>Riding</button>
        </div>
      </div>
      <Globe riding={riding}></Globe>
    </div>
  )
}

const Activity1 = styled(Activity1Base)`
  &__container {
    color: red;
    max-width: 900px;
    margin: 0 auto;
  }  
`
export default Activity1