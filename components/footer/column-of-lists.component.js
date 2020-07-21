import React from "react";
import { ColumnOfListsWithTitlesTypes } from "./column-of-lists.types";
import { ListWithTitle } from "./list-with-title.component";
import { CollapsibleListWithTitle } from "./collapsible-list-with-title.component";
import { breakpoints } from "../../theme/breakpoints";
import { HorizontalLine } from "./footer.style";
import MediaQuery from "react-responsive";

export const ColumnOfListsWithTitles = ({ listsWithTitles }) => (
  <MediaQuery maxWidth={breakpoints.small}>
    {matches => {
      return listsWithTitles.map(
        ({ title, items, isCollapsible }) =>
          isCollapsible && matches ? (
            <div key={title}>
              {/** TODO: do not draw the line if this is the first collapsible list in the whole footer */}
              <HorizontalLine />
              <CollapsibleListWithTitle items={items} title={title} />
            </div>
          ) : (
            <ListWithTitle items={items} key={title} title={title} />
          )
      );
    }}
  </MediaQuery>
);

ColumnOfListsWithTitles.propTypes = ColumnOfListsWithTitlesTypes;
