import styled from "styled-components";
import posed from "react-pose";
import { equals } from "ramda";

import { PrimaryNavigationItem } from "../primary-navigation-item";
import { animations } from "../../../../theme/motion";
import { ListResetStyles } from "../../../elements";

export const AnimatedNavigationList = styled(posed.ul())`
  ${ListResetStyles};

  ${PrimaryNavigationItem}, button {
    margin-bottom: ${({ theme }) => theme.spacing.four};
  }
`;

// delay, x, duration values from hims
const slowStartDelay = 400;
const defaultStartDelay = 100;

// with default start:
// first child: 100ms
// second child: 150ms
// third child: 200ms
// fourth child: 300ms
// fifth child: 400ms etc.
const calculateDelayTime = ({ i, slowStart }) => {
  const delayBase = slowStart ? slowStartDelay : defaultStartDelay;
  return i > 2 ? delayBase + 100 * (i - 1) : delayBase + 50 * i;
};

export const AnimatedNavigationListItem = posed.li({
  enter: {
    opacity: 1,
    x: 0,
    transition: ({ i, slowStart }) => ({
      delay: calculateDelayTime({ i, slowStart }),
      duration: animations.speed.slow,
      ease: animations.easing.spring
    })
  },
  exit: {
    opacity: 0,
    x: ({ position }) => (equals(position, "left") ? "-40px" : "40px"),
    transition: { duration: 0 }
  }
});

export const UserGreeting = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headingSmall};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  margin-bottom: ${({ theme: { spacing } }) => spacing.four};
  color: ${({ theme }) => theme.colors.text.callout};
`;
