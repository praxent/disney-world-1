import React from "react";
import { Grid } from "semantic-ui-react";
import MenuList from "./MenuList";

interface Props {
  liberty_tree: any[];
  sellItemHandle: (id: number) => void;
}
export default function Menu({ liberty_tree, sellItemHandle }: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <MenuList liberty_tree={liberty_tree} sellItemHandle={sellItemHandle} />
      </Grid.Column>
    </Grid>
  );
}
