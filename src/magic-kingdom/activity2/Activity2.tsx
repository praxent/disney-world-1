import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Background from "./images/liberty-tree-tavern.jpg";
import menu from "./images/menu.jpg";
import { List, Container } from "semantic-ui-react";
import Menu from "./Menu";

const Styles = styled.div`
  color: #0836b0;

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .menuList {
    margin: 50px;
  }
`;

function Activity2() {
  const [liberty_tree, setDrinks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/liberty_tree").then((response) => {
      console.log(response);
      setDrinks(response.data);
    });
  }, []);

  
  return (
    <Styles>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100hw",
          height: "100vh",
        }}
      >
        <div
          className="container"
          style={{
            backgroundImage: `url(${menu})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          .
          <Container className="menuList">
              <Menu liberty_tree={liberty_tree} />
          </Container>
        </div>
      </div>
    </Styles>
  );
}

export default Activity2;
