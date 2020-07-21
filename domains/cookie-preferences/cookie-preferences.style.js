import { css } from "styled-components";
import { rgba } from "polished";

import { BrandButtonWithVariantStyles } from "../../components/button/button.style";
import { ButtonResetStyles } from "../../components/elements";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const CookieBannerStyles = css`
  .cookie-banner {
    text-align: center;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${({ theme: { colors } }) =>
      rgba(colors.ui.callout, colors.opacity.alert)};
    z-index: ${props => props.theme.zIndexes.alert};
    padding: ${({ theme }) => theme.spacing.three};

    h3 {
      font-weight: 400;
      font-size: 1rem;
      ${createMinWidthMediaQuery("medium")} {
        font-size: 1.2rem;
      }
    }

    a {
      color: white;
    }

    .cookie-banner__content {
      position: relative;
      max-width: 64rem;
      margin: auto;

      ${createMinWidthMediaQuery("medium")} {
        padding: ${({ theme }) => theme.spacing.three} 0;
      }
    }

    .cookie-banner__notice {
      color: ${({ theme }) => theme.colors.white};
      margin: 0 auto ${({ theme }) => theme.spacing.three};
    }

    .cookie-banner__dismiss {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      position: absolute;
      right: 1rem;
      top: 1rem;
      transition-duration: 100ms;
      transition-property: color;
      transition-timing-function: ${({ theme }) =>
        theme.transitions.easing.default};
    }

    .cookie-banner__dismiss:hover,
    .cookie-banner__dismiss:focus {
      color: ${({ theme }) => theme.colors.ui.overlay};
    }

    button {
      ${ButtonResetStyles};
      ${BrandButtonWithVariantStyles};
    }
  }
`;
