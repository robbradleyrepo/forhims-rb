import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { showDrawerWithContentId } from "../../actions/drawer";
import { scrollToElementById } from "../../utils/scroll";

import { PdpHeroConnector } from "./pdp-hero.selectors";
import { PdpHero as PdpHeroCmp } from "./pdp-hero.component";
import {
  ADDITIONAL_INFO_TYPES,
  ADDITIONAL_CONTENT_IDS,
  BRANDS_CONTENT_SCROLL_ID
} from "./pdp-hero.constants";

const dispatchers = {
  showDrawer: showDrawerWithContentId
};

export const PdpHero = compose(
  connect(
    PdpHeroConnector,
    dispatchers
  ),
  withHandlers({
    handleAdditionalInfoClick: ({ showDrawer, additionalInfoType }) => () => {
      if (
        additionalInfoType ===
        ADDITIONAL_CONTENT_IDS[ADDITIONAL_INFO_TYPES.BRANDS]
      ) {
        scrollToElementById(BRANDS_CONTENT_SCROLL_ID);
      } else {
        showDrawer(ADDITIONAL_CONTENT_IDS[additionalInfoType]);
      }
    },
    handleViewSafetyInformation: ({ showDrawer }) => () => {
      showDrawer("safetyInformation");
    }
  })
)(PdpHeroCmp);
