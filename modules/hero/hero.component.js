import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Frame,
  Information,
  Title,
  SubTitle,
  Actions,
  Picture
} from "./hero.style";
import { Button } from "../../components/button";
import { useSmoothScroll, useMeasure } from "../../utils/dom";

export const Hero = ({
  title,
  subTitle,
  image,
  bgColor,
  imageDimensions: dimensions,
  onStartConsultation,
  actionScrollDownLabel,
  actionConsultationLabel
}) => {
  const [{ ref }, bounds] = useMeasure();
  const scrollfn = useSmoothScroll();

  const onScrollNext = useCallback(
    () => {
      if (!ref.current) return;
      // How far Y are we?
      const y = window.scrollY || document.documentElement.scrollTop;
      // Scroll the height of the hero - the y
      scrollfn(bounds.height - y);
    },
    [bounds, ref, scrollfn]
  );

  return (
    <Frame ref={ref} bgColor={bgColor}>
      <Information>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <Actions>
          {actionConsultationLabel && (
            <Button
              label={actionConsultationLabel}
              onClick={onStartConsultation}
            />
          )}
          {actionScrollDownLabel && (
            <Button label={actionScrollDownLabel} onClick={onScrollNext} />
          )}
        </Actions>
      </Information>
      <Picture title={title} image={image} dimensions={dimensions} />
    </Frame>
  );
};

export default Hero;

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  onStartConsultation: PropTypes.func,
  actionScrollDownLabel: PropTypes.string,
  actionConsultationLabel: PropTypes.string,
  imageDimensions: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  ).isRequired
};
