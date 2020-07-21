import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { ButtonLink } from "../../../components/fonts/link";

export const ProfileGridWrapper = styled.div`
  width: 100%;

  ${createMinWidthMediaQuery("medium")} {
    ${({ position, theme: { spacing } }) =>
      position === "right"
        ? css`
            padding-left: ${spacing.three};
          `
        : css`
            padding-right: ${spacing.three};
          `};
  }
`;
ProfileGridWrapper.propTypes = {
  position: PropTypes.oneOf(["left", "right"])
};

export const ToggleEditButton = styled(ButtonLink)`
  position: relative;
  border-color: ${({ theme }) => theme.colors.ui.callout};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};

  svg {
    margin-right: ${({ theme }) => theme.spacing.one};
    position: relative;
    transform: translateY(-20%);
  }
`;
