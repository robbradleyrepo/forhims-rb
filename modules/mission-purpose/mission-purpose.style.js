import styled from "styled-components";
import { combineRems } from "../../utils/rem";
import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../utils/breakpoints";
import { GRID_GUTTERS } from "../../components/layout/grid/grid.constants";
import { CloudinaryPicture } from "../../components/picture";

export const MissionPurposeWrapper = styled.div`
  padding: ${({ theme: { spacing } }) =>
    `${spacing.three} 0 ${spacing.four} 0`};

  ${createMaxWidthMediaQuery("small")} {
    margin: 0 ${GRID_GUTTERS.XS};
  }
`;

export const CardSide = styled.div`
  ${createMinWidthMediaQuery("medium")} {
    max-width: 28rem;
    margin: auto;
    position: relative;
  }
`;

export const FillPicture = styled(CloudinaryPicture)`
  width: 100%;
  img {
    width: 100%;
  }
`;
export const ImageSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${createMaxWidthMediaQuery("medium")} {
    margin-top: ${({ theme: { spacing } }) => spacing.three};
  }

  ${createMinWidthMediaQuery("medium")} {
    padding-right: ${({ theme: { grid } }) => grid.column};
  }
`;

export const CardInterior = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: ${({ theme: { spacing } }) => spacing.four};

  ${createMinWidthMediaQuery("medium")} {
    height: 75vh;
    min-height: 35rem;
  }
`;

export const LinkContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing.three};

  ${createMinWidthMediaQuery("medium")} {
    position: absolute;
    /* helps with a centering issue on Desktop */
    left: 0;
    right: 0;
    bottom: ${({ theme: { spacing } }) =>
      combineRems(spacing.three, spacing.four)};
  }
`;
