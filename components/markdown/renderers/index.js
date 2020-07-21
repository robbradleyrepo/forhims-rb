import React from "react";

import { Link } from "../../link";
import { Headings } from "./headings";

import { CustomBold } from "../markdown.style";
import { P, List } from "../../fonts";

/**
 * We're not sure why, but the server is having trouble using the P styled component as a renderer.
 * Wrapping P in another component resolves the problem.
 */

const ParagraphRenderer = props => <P {...props} />;
const BoldRenderer = props => <CustomBold {...props} />;
const ListRenderer = props => <List {...props} />;

export default {
  heading: Headings,
  link: Link,
  list: ListRenderer,
  paragraph: ParagraphRenderer,
  strong: BoldRenderer
};
