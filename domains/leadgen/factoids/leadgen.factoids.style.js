import styled from "styled-components";

import { P, Subheadline } from "../../../components/fonts";
import { leadgenFlexilistStyles, leadgenSectionStyles } from "../leadgen.style";
import { CloudinaryPicture } from "../../../components/picture";

const itemWidth = 220;

export const Frame = styled.div`
  text-align: center;

  ${leadgenSectionStyles};
`;

export const FactList = styled.ul`
  ${leadgenFlexilistStyles};

  > * {
    min-width: ${itemWidth}px;
  }
`;

export const Title = styled(Subheadline)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SubTitle = styled(Subheadline)`
  max-width: 620px;
  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.two};
`;

export const Num = styled(Subheadline)`
  display: inline-block;
  position: relative;
  font-variant-numeric: tabular-nums;

  margin-right: ${({ theme }) => theme.spacing.two};
  padding-right: ${({ theme }) => theme.spacing.two};

  &::after {
    content: "";
    position: absolute;
    right: -1px;
    top: 50%;
    width: 1px;
    height: 70%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.ui.separator};
  }
`;

export const Body = styled(P)`
  margin-top: ${({ theme }) => theme.spacing.three};
`;

export const Picture = styled(CloudinaryPicture)`
  max-width: 140px;
  margin: 0 auto;

  margin-bottom: ${({ theme }) => theme.spacing.three};
`;
