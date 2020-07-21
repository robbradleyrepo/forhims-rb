import { stripUnit } from "polished";
import { max } from "ramda";

import miscUtils from "./misc";
import { sizing } from "../theme/spacing";
import { BASE_FONT_SIZE } from "../theme/typography";

const { isClient } = miscUtils;

/*
  Added a try catch to scrollTo() because on the version of Chromium
  used for headless test execution, window.scroll(options) did not exist
 */
export const scrollTo = ({ top, left, isInstant = false }) => {
  try {
    return (
      isClient() &&
      window.scroll({ top, left, behavior: isInstant ? "instant" : "smooth" })
    );
  } catch (error) {
    return isClient() && window.scroll(top, left);
  }
};

export const scrollToTop = scrollTo({ top: 0, left: 0, isInstant: false });

// Attach to anchor tags with #hash links for accessibility
export const scrollLinkToElementById = id => linkClickEvent => {
  linkClickEvent.preventDefault();
  if (id) {
    scrollToElementById(id);
  }
};

export const scrollToElementById = id => {
  const scrollTarget = document.getElementById(id);
  if (scrollTarget) {
    const scrollOffset = stripUnit(sizing.header) * BASE_FONT_SIZE;
    const scrollPosition = scrollTarget.offsetTop;
    const scrollDestination = max(0, scrollPosition - scrollOffset);
    scrollTo({
      top: scrollDestination
    });
    scrollTarget.focus();
  }
};

export const scrollToElementByReactRef = ref => {
  const scrollTarget = ref.current;
  if (scrollTarget) {
    const scrollOffset = stripUnit(sizing.header) * BASE_FONT_SIZE;
    const scrollPosition = scrollTarget.getBoundingClientRect().top;
    const scrollDestination = max(0, scrollPosition - scrollOffset);
    scrollBy({
      top: scrollDestination,
      behavior: "smooth"
    });
    scrollTarget.focus();
  }
};
