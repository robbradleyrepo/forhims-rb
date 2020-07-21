import React from "react";

import { Headline1, Headline2, Headline3, Headline4 } from "../../fonts";

export const Headings = props => {
  switch (props.level) {
    case 1:
      return <Headline1 {...props} />;
    case 2:
      return <Headline2 {...props} />;
    case 3:
      return <Headline3 {...props} />;
    default:
      return <Headline4 {...props} />;
  }
};
