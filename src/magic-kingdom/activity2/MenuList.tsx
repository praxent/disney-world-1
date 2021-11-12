import React from "react";
import { Segment, Item } from "semantic-ui-react";
import styled from "styled-components";

const Styles = styled.div`
  button {
    background-color: #103CB0;
    border: none;
    color: white;
    padding: 7px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin-top:5px
  }
  button:hover {
    background-color: #081C4F;
    color: white;
    cursor: pointer;
  }
`;
interface Props {
  liberty_tree: any[];
  sellItemHandle: (id: number) => void;
}

export default function MenuList({ liberty_tree, sellItemHandle }: Props) {
  return (
    <Styles>
      <Segment>
        <Item.Group divided>
          {liberty_tree.map((liberty_tree) => (
            <Item key={liberty_tree.id}>
              <Item.Content>
                <Item.Header>
                  <h3>{liberty_tree.name}</h3>
                </Item.Header>
                <Item.Description>
                  <div>
                    <b>Description:</b> {liberty_tree.description}
                  </div>
                  <div>
                    <b>Type:</b> {liberty_tree.type}
                  </div>
                  <div>
                    <b>Quantity:</b> {liberty_tree.quantity}
                  </div>
                </Item.Description>
              </Item.Content>
              <Item.Extra>
                <button onClick={() => sellItemHandle(liberty_tree)}>
                  Sell
                </button>
              </Item.Extra>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </Styles>
  );
}
