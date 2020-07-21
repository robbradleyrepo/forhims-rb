import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../components/block";
import { ListReset } from "../../../components/elements";

import { TreatmentsLink } from "./treatments-list.style";

export const TreatmentsList = ({ items }) => (
  <ListReset>
    {items &&
      items.map(({ name, url }) => (
        <li key={`${name}-${url}`}>
          <Block mb={3}>
            <TreatmentsLink to={url}>{name}</TreatmentsLink>
          </Block>
        </li>
      ))}
  </ListReset>
);
TreatmentsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  )
};
