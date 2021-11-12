import React, { useState } from "react";
import { Button, Container } from "semantic-ui-react";
import styled from "styled-components";

const Styles = styled.div`
  .button {
    background-color: #0a35a2;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 5px;
  }

  .container {
    position: fixed;
    z-index: 9999;
    top: 5px;
    left: 5px;
  }
`;

export const AccessControlContext = React.createContext(true);

function AccessControl ({children}) {
    const [underage, setUnderage] = useState(true);
    
  return (
    <AccessControlContext.Provider value={underage}>
      <Styles className="container">
        <Container>
          <Button
            content="Adult"
            className="button"
            onClick={() => setUnderage(false)}
          />
          <Button
            content="Child"
            className="button"
            onClick={() => setUnderage(true)}
          />
        </Container>
      </Styles>
      {children}
    </AccessControlContext.Provider>
  );
}

export default AccessControl;
