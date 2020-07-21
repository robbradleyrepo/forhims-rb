import PropTypes from "prop-types";
import R from "ramda";
import { HeroContentCard } from "../../../components/hero-content-card";

const propTypes = {
  contentCard: PropTypes.shape(
    R.dissoc("scrollToSafetyInformation")(HeroContentCard.propTypes)
  ),
  scrollToSafetyInformation: PropTypes.func,
  imageIdentifiers: PropTypes.arrayOf(PropTypes.string),
  thumbnailIdentifiers: PropTypes.arrayOf(PropTypes.string)
};

export default propTypes;
