import React from "react";

import PropTypes from "prop-types";

import {
  TestimonialList,
  Quote,
  Source,
  Frame,
  Testimonial
} from "./leadgen.testimonials.style";
import { LeadgenHeading } from "../leadgen.style";

const Testimonials = ({ title, items, color = "transparent" }) => (
  <Frame color={color}>
    {title && <LeadgenHeading as="h4">{title}</LeadgenHeading>}
    <TestimonialList>
      {items.map(({ quote, source }, i) => (
        <Testimonial key={"testimonial" + i}>
          <Quote>{quote}</Quote>
          <Source>{source}</Source>
        </Testimonial>
      ))}
    </TestimonialList>
  </Frame>
);

export default Testimonials;

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string,
  color: PropTypes.string
};
