import React from "react";
import R from "ramda";

import { HeroContentCard } from "../../../../components/hero-content-card";
import {
  ProductHeroContentGridItem,
  ProductHeroRootLayer,
  ProductHeroThumbnails,
  ProductHeroOverlay,
  ProductHeroOverlayContent,
  ProductHeroDesktopImages,
  ProductHeroThumbnail
} from "../product-hero.style";
import productHeroProptypes from "../product-hero.proptypes";
import { mapUrlsToImageProps } from "../product-hero.utils";
import { CloudinaryPicture } from "../../../../components/picture";

const height100vh = "100vh";

export class ProductHeroWithScrollDesktop extends React.Component {
  rootWrapperRef;
  imageRefs;

  constructor(props) {
    super(props);

    this.rootWrapperRef = React.createRef();
    this.imageRefs = R.map(url => React.createRef())(props.imageIdentifiers);

    this.stickyOverlayScrollListener = this.stickyOverlayScrollListener.bind(
      this
    );
    this.resizeListener = this.resizeListener.bind(this);
    this.readjustVisuals = this.readjustVisuals.bind(this);
    this.cloudinaryPictureLoaded = this.cloudinaryPictureLoaded.bind(this);

    this.scrollToImageAtIndexHandler = this.scrollToImageAtIndexHandler.bind(
      this
    );
    this.toThumbnail = this.toThumbnail.bind(this);
    this.toImage = this.toImage.bind(this);

    this.state = {
      overlayPositioningAttributes: {
        isFixed: false,
        top: true,
        height: height100vh
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.stickyOverlayScrollListener, true);
    window.addEventListener("resize", this.resizeListener, true);

    this.readjustVisuals();
  }

  componentDidUpdate() {
    this.readjustVisuals();
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.stickyOverlayScrollListener,
      true
    );

    window.removeEventListener("resize", this.resizeListener, true);
  }

  resizeListener() {
    this.readjustVisuals();
  }

  stickyOverlayScrollListener() {
    this.readjustVisuals();
  }

  cloudinaryPictureLoaded() {
    this.readjustVisuals();
  }

  readjustVisuals() {
    const rect = this.rootWrapperRef.current.getBoundingClientRect();

    const viewportIsLargerThanComponent = window.innerHeight >= rect.height;

    if (viewportIsLargerThanComponent) {
      if (this.state.overlayPositioningAttributes.height === height100vh) {
        this.setState({
          overlayPositioningAttributes: {
            isFixed: false,
            top: true,
            height: "100%"
          }
        });
      }

      return;
    }

    const heightNeedsToBeUpdated =
      this.state.overlayPositioningAttributes.height !== height100vh;
    const baseAttributes = {
      height: height100vh
    };

    const distancePastTop = rect.top;
    const distancePastBottom = window.innerHeight - rect.top - rect.height;

    const viewportWithinRootRegion =
      distancePastTop < 0 && distancePastBottom < 0;

    const isUsingFixedPositioning = this.state.overlayPositioningAttributes
      .isFixed;

    if (viewportWithinRootRegion) {
      if (!isUsingFixedPositioning || heightNeedsToBeUpdated) {
        this.setState({
          overlayPositioningAttributes: {
            ...baseAttributes,
            isFixed: true
          }
        });
      }
    }
    if (!viewportWithinRootRegion) {
      if (isUsingFixedPositioning || heightNeedsToBeUpdated) {
        let newOverlayPositionState = {
          ...baseAttributes,
          isFixed: false
        };

        if (distancePastBottom >= 0) {
          newOverlayPositionState = {
            ...newOverlayPositionState,
            bottom: true
          };
        } else {
          newOverlayPositionState = { ...newOverlayPositionState, top: true };
        }

        this.setState({
          overlayPositioningAttributes: newOverlayPositionState
        });
      }
    }
  }

  scrollToImageAtIndexHandler(idx, event) {
    event.preventDefault();

    this.imageRefs[idx].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start"
    });

    return false;
  }

  toImage(props) {
    const { key, src, targetRefIndex } = props;

    return (
      <div ref={this.imageRefs[targetRefIndex]} {...{ key }}>
        <CloudinaryPicture
          loadImmediately
          title={""}
          image={src}
          handleLoad={this.cloudinaryPictureLoaded}
        />
      </div>
    );
  }

  toThumbnail(props) {
    const { key, src, targetRefIndex } = props;

    return (
      <ProductHeroThumbnail
        key={key}
        onClick={ev => this.scrollToImageAtIndexHandler(targetRefIndex, ev)}
      >
        <CloudinaryPicture loadImmediately title={""} image={src} />
      </ProductHeroThumbnail>
    );
  }

  render() {
    const {
      contentCard,
      imageIdentifiers,
      thumbnailIdentifiers,
      scrollToSafetyInformation
    } = this.props;

    return (
      <ProductHeroRootLayer ref={this.rootWrapperRef}>
        <ProductHeroOverlay
          positioningAttributes={this.state.overlayPositioningAttributes}
        >
          <ProductHeroOverlayContent>
            <ProductHeroThumbnails>
              {R.compose(
                R.map(this.toThumbnail),
                mapUrlsToImageProps
              )(thumbnailIdentifiers)}
            </ProductHeroThumbnails>
            <ProductHeroContentGridItem>
              <HeroContentCard
                {...contentCard}
                {...{ scrollToSafetyInformation }}
              />
            </ProductHeroContentGridItem>
          </ProductHeroOverlayContent>
        </ProductHeroOverlay>
        <ProductHeroDesktopImages>
          {R.compose(
            R.map(this.toImage),
            mapUrlsToImageProps
          )(imageIdentifiers)}
        </ProductHeroDesktopImages>
      </ProductHeroRootLayer>
    );
  }
}

ProductHeroWithScrollDesktop.propTypes = productHeroProptypes;
