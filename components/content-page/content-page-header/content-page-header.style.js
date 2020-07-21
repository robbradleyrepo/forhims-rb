import styled from "styled-components";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { Headline2 } from "../../fonts";
import { rem } from "polished";
import { Block } from "../../block";

export const DarkBackgroundBlock = styled.div`
  position: absolute;
  width: 100%;
  height: ${rem(450)};
  background-color: ${({ theme }) => theme.colors.brand.hair};
  top: 0;
`;

export const Headline2Wrapper = styled(Headline2)`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-top: ${({ theme }) => theme.spacing.four};
  text-align: center;
  z-index: ${({ theme }) => theme.zIndexes.foreground};
`;

export const EyebrowBlock = styled(Block)`
  margin-top: ${rem(96)};
  z-index: ${({ theme }) => theme.zIndexes.foreground};

  ${createMinWidthMediaQuery("small")} {
    margin-top: ${rem(132)};
  }
  ${createMinWidthMediaQuery("medium")} {
    margin-top: ${rem(164)};
  }
`;

export const PhotoContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndexes.foreground};
  img {
    min-height: 20rem;
    object-fit: cover;
  }
`;
