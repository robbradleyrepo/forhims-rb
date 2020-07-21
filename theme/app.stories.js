import React from "react";
import { storiesOf } from "@storybook/react";

import { BodySmall, P, TextLink } from "../components/fonts";
import { Link } from "../components/link";
import { Grid } from "../components/layout";
import { Block } from "../components/block";
import { ListReset } from "../components/elements";
import { linkTo } from "@storybook/addon-links";

import {
  BGContainer,
  Row,
  DocumentationTitle,
  TableContent,
  TableTitle
} from "./storybook/theme-stories.component";

storiesOf("Theme|About", module).add("About", () => {
  return (
    <BGContainer>
      <Grid container>
        <Row>
          <DocumentationTitle title="Hims UK Store UI" />
        </Row>
        <Row>
          <Block pb={3}>
            <Grid container>
              <TableTitle>
                <BodySmall>About</BodySmall>
              </TableTitle>
              <TableContent>
                <Block>
                  <Block>
                    <P>
                      This sandbox serves as documentation for the elements that
                      make up the hims UK web store UI.
                    </P>
                  </Block>
                </Block>
              </TableContent>
            </Grid>
          </Block>
        </Row>
        <Row>
          <Block pb={3}>
            <Grid container>
              <TableTitle>
                <BodySmall>Theme</BodySmall>
                <BodySmall secondary>/theme/index.js</BodySmall>
              </TableTitle>
              <TableContent>
                <Block>
                  <P>
                    We drive consistent UI development with a brand theme object
                    containing design token variables used across the app.
                  </P>
                  <P>Design Token Documentation:</P>
                  <Block mb={3}>
                    <ListReset>
                      <li>
                        <TextLink onClick={linkTo("Theme|Colors")}>
                          Colors
                        </TextLink>
                      </li>
                      <li>
                        <TextLink onClick={linkTo("Theme|Spacing", "Grid")}>
                          Grid Layouts
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          onClick={linkTo("Theme|Spacing", "Vertical Spacing")}
                        >
                          Vertical Spacing
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          onClick={linkTo(
                            "Theme|Typography",
                            "Typography Styles"
                          )}
                        >
                          Type Styles
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          onClick={linkTo(
                            "Theme|Typography",
                            "Typography Scale"
                          )}
                        >
                          Type Scale
                        </TextLink>
                      </li>
                    </ListReset>
                  </Block>
                  <Block mb={3}>
                    <BodySmall secondary>
                      The theme also contains standardized values for responsive
                      scaling, motion, elevation and shadows - documentation
                      TBD.
                    </BodySmall>
                  </Block>
                </Block>
              </TableContent>
            </Grid>
          </Block>
        </Row>
        <Row>
          <Block pb={3}>
            <Grid container>
              <TableTitle>
                <BodySmall>Styling</BodySmall>
                <BodySmall secondary>Stack and Utilities</BodySmall>
              </TableTitle>
              <TableContent>
                <Block>
                  <P>
                    The hims UK React application uses a CSS-in-JS approach to
                    styling with support from external libraries.
                  </P>
                  <P>
                    Styles are component-scoped using{" "}
                    <Link to="https://styled-components.com/docs/">
                      styled-components
                    </Link>.
                  </P>
                  <P>
                    The styled-components <strong>ThemeProvider</strong> adds
                    theming context to every component, that can be accessed in
                    style declarations via props. ThemeProvider instances can be
                    nested to add category - specific styles to components.
                    Product categories can extend the core brand theme, adding
                    context - specific overrides without duplicating code.
                  </P>
                  <P>
                    We use helpers from{" "}
                    <Link to="https://github.com/jxnblk/styled-system/tree/master/docs">
                      styled-system
                    </Link>{" "}
                    to apply theme variations through component props. The
                    primary example is the <strong>Block</strong> component,
                    used to compose other components in a vertical rhythm that
                    follows the spacing scale.
                  </P>
                  <P>
                    We leverage utilities from{" "}
                    <Link to="https://polished.js.org">Polished</Link> for CSS
                    operations, like mutating colors or converting px values to
                    rems.
                  </P>
                  <P>
                    We use <Link to="https://popmotion.io/pose/">Pose</Link> for
                    declarative component animations, that can be extended using
                    styled-components.
                  </P>
                </Block>
              </TableContent>
            </Grid>
          </Block>
        </Row>
      </Grid>
    </BGContainer>
  );
});
