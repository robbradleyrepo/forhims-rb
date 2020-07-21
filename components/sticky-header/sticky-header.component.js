import React from "react";
import PropTypes from "prop-types";
import { equals, not, pipe } from "ramda";
import throttle from "lodash.throttle";

import {
  StickyHeaderContainer,
  StickySection,
  ScrollAwaySection,
  SCROLL_YPOS_TRIGGER
} from "./sticky-header.style";

// hasScrolled is passed down as a prop for optional individual component styling

export class StickyHeader extends React.Component {
  constructor() {
    super();
    this.onThrottledScroll = throttle(this.onDocumentScroll, 32);
    this.scrollAwayContent = React.createRef();
    this.stickyContent = React.createRef();
  }
  state = {
    hasScrolled: false,
    stickyContentHeight: null,
    scrollAwayContentHeight: null
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onThrottledScroll);
    this.setState({
      stickyContentHeight: this.stickyContent.current.clientHeight,
      scrollAwayContentHeight: this.scrollAwayContent.current.clientHeight
    });
    this.onDocumentScroll();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onThrottledScroll);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const didPropsChange = pipe(
      equals(nextProps),
      not
    )(this.props);
    const didStateChange = pipe(
      equals(nextState),
      not
    )(this.state);
    return didStateChange || didPropsChange;
  }
  onDocumentScroll = () => {
    const { pageYOffset } = window;
    pageYOffset > SCROLL_YPOS_TRIGGER
      ? this.setState({ hasScrolled: true })
      : this.setState({ hasScrolled: false });
  };

  render() {
    const {
      scrollAway: ScrollAwayComponent,
      sticky: StickyComponent
    } = this.props;
    const {
      hasScrolled,
      scrollAwayContentHeight,
      stickyContentHeight
    } = this.state;
    return (
      <StickyHeaderContainer
        scrollAwayHeight={scrollAwayContentHeight}
        stickyHeight={stickyContentHeight}
      >
        <div ref={this.scrollAwayContent}>
          {ScrollAwayComponent && (
            <ScrollAwaySection
              isVisible={!hasScrolled}
              scrollAwayHeight={scrollAwayContentHeight}
              stickyHeight={stickyContentHeight}
            >
              <ScrollAwayComponent hasScrolled={hasScrolled} />
            </ScrollAwaySection>
          )}
        </div>
        <div ref={this.stickyContent}>
          {StickyComponent && (
            <StickySection
              isAtTop={hasScrolled}
              stickyHeight={stickyContentHeight}
              scrollAwayHeight={scrollAwayContentHeight}
            >
              <StickyComponent hasScrolled={hasScrolled} />
            </StickySection>
          )}
        </div>
      </StickyHeaderContainer>
    );
  }
}

StickyHeader.propTypes = {
  scrollAway: PropTypes.func,
  sticky: PropTypes.func
};
