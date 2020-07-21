import React from "react";
import { P } from "../components/fonts/p";
import { grid } from "../theme/spacing";
import { Block } from "../components/block";
/**
 * @module NotFound
 */

class NotFound extends React.Component {
  render() {
    return (
      <Block
        alignItems="center"
        flex="2"
        minHeight="100vh"
        pt={6}
        textAlign="center"
        ml={grid.gutter}
        mr={grid.gutter}
      >
        <P>Oops! The page you are looking for cannot be found.</P>
      </Block>
    );
  }
}

NotFound.displayName = "NotFound";

export default NotFound;
