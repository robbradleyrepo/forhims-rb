import React from "react";

import PropTypes from "prop-types";

import {
  Title,
  SubTitle,
  Body,
  Frame,
  FactList,
  Num,
  Picture
} from "./leadgen.factoids.style";
import { LeadgenHeading } from "../leadgen.style";
import { Button } from "../../../components/button";

const Factoids = ({
  items,
  title,
  subTitle,
  onStartConsultation,
  color = "transparent",
  ordered = false
}) => {
  return (
    <Frame color={color}>
      {title && <LeadgenHeading as="h4">{title}</LeadgenHeading>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <FactList>
        {items.map((item, i) => (
          <Fact
            key={"factoidsitem" + i}
            {...item}
            i={ordered ? i : undefined}
          />
        ))}
      </FactList>
      {onStartConsultation && (
        <Button
          label="Start a free consultation"
          onClick={onStartConsultation}
        />
      )}
    </Frame>
  );
};

export default Factoids;

const PropFact = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string
};

Factoids.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PropFact)).isRequired,
  onStartConsultation: PropTypes.func,
  ordered: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  color: PropTypes.string
};

const Fact = ({ title, image, body, i }) => (
  <li>
    <Picture image={image} title={title} />
    <Title>
      {i !== undefined && <Num as="span">{i + 1}</Num>}
      {title}
    </Title>
    <Body>{body}</Body>
  </li>
);

Fact.propTypes = {
  ...PropFact,
  i: PropTypes.number
};
