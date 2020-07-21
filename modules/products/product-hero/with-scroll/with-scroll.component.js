import React from "react";
import R from "ramda";

import { breakpoints } from "../../../../theme/breakpoints";
import MediaQuery from "react-responsive";

import productHeroProptypes from "../product-hero.proptypes";
import { ProductHeroWithScrollDesktop } from "./with-scroll.desktop.component";
import { ProductHeroWithScrollMobile } from "./with-scroll.mobile.component";
import { ProductHeroWithScrollWrapper } from "../product-hero.style";
import { PDP_SCROLL_TO_SAFETY_INFORMATION } from "../../../../constants/ActionTypes";
import { connect } from "react-redux";
import { productHeroSelectors } from "../product-hero.selectors";

const deviceTypeMapping = {
  desktop: breakpoints.medium + 1,
  tablet: breakpoints.small + 1,
  phone: breakpoints.small
};

export class ProductHeroWithScrollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const props = this.props;

    let mediaQueryValueOverride = {};
    if (!this.state.mounted) {
      const widthValue = {
        width: deviceTypeMapping[props.deviceType] || deviceTypeMapping.phone
      };
      mediaQueryValueOverride = { values: widthValue };
    }

    return (
      <ProductHeroWithScrollWrapper
        key={`product-hero-mounted-${this.state.mounted}`}
      >
        <MediaQuery maxWidth={breakpoints.medium} {...mediaQueryValueOverride}>
          <ProductHeroWithScrollMobile {...props} />
        </MediaQuery>
        <MediaQuery
          minWidth={breakpoints.medium + 1}
          {...mediaQueryValueOverride}
        >
          <ProductHeroWithScrollDesktop {...props} />
        </MediaQuery>
      </ProductHeroWithScrollWrapper>
    );
  }
}

ProductHeroWithScrollView.propTypes = {
  ...R.dissoc("scrollToSafetyInformation")(productHeroProptypes)
};

const dispatchers = dispatch => ({
  scrollToSafetyInformation: () =>
    dispatch({
      type: PDP_SCROLL_TO_SAFETY_INFORMATION,
      payload: {}
    })
});

export const ProductHeroWithScroll = connect(
  productHeroSelectors,
  dispatchers
)(ProductHeroWithScrollView);
