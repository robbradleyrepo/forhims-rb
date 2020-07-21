import React from "react";
import { FooterLink, LinkList, Title } from "./footer.style";
import { ListWithTitleTypes } from "./list-with-title.types";

export const ListWithTitle = ({ title, items }) => (
  <React.Fragment>
    <Title>{title}</Title>
    <LinkList>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <FooterLink to={item.url}>{item.label}</FooterLink>
        </li>
      ))}
    </LinkList>
  </React.Fragment>
);

ListWithTitle.propTypes = ListWithTitleTypes;
