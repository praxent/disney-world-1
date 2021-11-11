import React from "react";
import { Segment, Item, Button, Label } from "semantic-ui-react";

interface Props {
  liberty_tree: any[];
}
export default function MenuList({ liberty_tree }: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {liberty_tree.map((liberty_tree) => (
          <Item key={liberty_tree.id}>
            <Item.Content>
              <Item.Header>{liberty_tree.name}</Item.Header>
              <Item.Description>
                <div>{liberty_tree.description}</div>
                <div>{liberty_tree.type}</div>
              </Item.Description>
            </Item.Content>
            <Item.Extra>
              <Button floated="left" color="blue">
                <Label basic content={liberty_tree.id}></Label>
              </Button>
            </Item.Extra>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
