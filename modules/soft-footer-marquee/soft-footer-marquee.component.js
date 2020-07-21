import React from "react";
import PropTypes from "prop-types";
import { repeat, pipe, join, min } from "ramda";

import {
  SoftFooterWrapper,
  SoftFooterPicture,
  Marquee,
  MarqueeContinuation
} from "./soft-footer-marquee.style";
import { breakpoints } from "../../theme/breakpoints";

const transformText = (text, repetitions) =>
  pipe(
    repeat(`${text} `),
    join("")
  )(repetitions);

// TODO: Introduce intermediary step and remove reliance on CloudinaryComponent
export class SoftFooterMarquee extends React.Component {
  constructor() {
    super();
    this.scrollingText = React.createRef();
  }
  state = {
    textRepetitions: 1,
    viewportWidth: breakpoints.small
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateTextRepetitions);
    this.updateTextRepetitions();
  }
  // for smooth scroll between both elements, the width of one scrolling element can't be less than viewport
  updateTextRepetitions = () => {
    const scrollingTextWidth = this.scrollingText.current.clientWidth;
    const viewportWidth = window.innerWidth;
    const textRepetitionsToFillViewport =
      scrollingTextWidth && !isNaN(scrollingTextWidth)
        ? min(Math.ceil(viewportWidth / scrollingTextWidth), 100)
        : 1;
    this.setState({
      textRepetitions: textRepetitionsToFillViewport,
      viewportWidth
    });
  };

  render() {
    const { id, images, text } = this.props;
    const { textRepetitions, viewportWidth } = this.state;
    const displayText = transformText(text, textRepetitions);
    return (
      <SoftFooterWrapper id={id}>
        <SoftFooterPicture image={images} title="scrolling-text-image" />
        <Marquee
          ref={this.scrollingText}
          chars={displayText.length}
          viewportWidth={viewportWidth}
        >
          {displayText}
        </Marquee>
        <MarqueeContinuation
          chars={displayText.length}
          viewportWidth={viewportWidth}
        >
          {displayText}
        </MarqueeContinuation>
      </SoftFooterWrapper>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateTextRepetitions);
  }
}

SoftFooterMarquee.propTypes = {
  id: PropTypes.string,
  images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  text: PropTypes.string
};
