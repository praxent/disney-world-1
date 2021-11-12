import { Button, Container } from "semantic-ui-react";
import styled from "styled-components";

const Styles = styled.div`
  .test {
    background-color: #0A35A2;
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

function AccessControl() {
  return (
    <Styles className="container">
      <Container>
        <Button content="Adult" className="test" />
        <Button content="Child" className="test" />
      </Container>
    </Styles>
  );
}

export default AccessControl;
