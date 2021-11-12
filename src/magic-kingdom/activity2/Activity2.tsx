import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Background from "./images/liberty-tree-tavern.jpg";
import menu from "./images/menu.jpg";
import { List, Container, Item } from "semantic-ui-react";
import Menu from "./Menu";
import MenuList from "./MenuList";

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

const Activity2 = () => {
  const [liberty_treeMenu, setMenu] = useState([]);

  const getDrinksMenu = async () => {
    const data = axios.get(`http://localhost:4000/liberty_tree`);
    return data;
  };

  const sellItemHandle = (liberty_tree) => {
    let updatedDrinks = liberty_treeMenu.map((menuItem) => {
      if (menuItem.id === liberty_tree.id) {
        return { ...menuItem, quantity: liberty_tree.quantity - 1 };
      }
      return menuItem;
    });
    setMenu(updatedDrinks);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/liberty_tree").then((response) => {
      console.log(response);
      setMenu(response.data);
    });
  }, []);

  useEffect(() => {
    getDrinksMenu().then((res) => {
      setMenu(res.data);
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
            <Menu
              liberty_tree={liberty_treeMenu}
              sellItemHandle={sellItemHandle}
            />
          </Container>
        </div>
      </div>
    </Styles>
  );
};

export default Activity2;
