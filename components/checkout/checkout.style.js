import styled from "styled-components";
import { rem } from "polished";

import { createBootstrapColumnWidth } from "./checkout.utils";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { Headline4, P } from "../fonts";
import { DrawerContentWrapper } from "../drawer/drawer.style";

// Checkout Outer Layout
export const CheckoutFlexColumn = styled(DrawerContentWrapper)`
  padding-top: initial;
`;

export const CheckoutHeader = styled.div`
  align-items: center;
  display: flex;
  flex: none;
  justify-content: center;
  width: 100%;

  height: ${({ theme }) => theme.sizing.header};
`;

export const CouponAppliedText = styled.span`
  color: rgb(0, 128, 0);
`;

export const CheckoutContainer = styled(CheckoutFlexColumn)`
  -webkit-overflow-scrolling: initial;
  overflow: initial;
  min-height: 0;
  position: relative;
`;

export const CheckoutTitle = styled(Headline4)`
  margin: 0 auto ${({ theme }) => theme.spacing.two};
`;

export const CheckoutDescription = styled(P)`
  margin-bottom: 0;

  color: ${({ theme }) => theme.colors.text.secondary};
`;

// Checkout Page footer - for fixed buttons and CTAs
// Should be imported into each individual view
// Floating styles will be applied when nested within CheckoutContent
export const CheckoutFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

// Allows for scrollable content within fixed drawer
// Bottom border prevents scrolling content from rendering behind footer
export const CheckoutContent = styled.div`
  border-bottom: ${rem(56)} solid transparent;

  ${CheckoutFooter} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  ${createMinWidthMediaQuery("medium")} {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    ${CheckoutFooter} {
      position: absolute;
    }
  }
`;

// Apply a consistent width to each nested cart page
export const CheckoutPageWrapper = styled.div`
  margin: 0 auto;
  max-width: ${createBootstrapColumnWidth(11)};

  ${createMinWidthMediaQuery("medium")} {
    max-width: ${createBootstrapColumnWidth(8)};
  }
`;
