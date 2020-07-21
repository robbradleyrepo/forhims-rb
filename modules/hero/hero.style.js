import styled from "styled-components";

import { Headline1 } from "../../components/fonts";
import { CloudinaryCover } from "../../components/picture";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
`;

export const Picture = CloudinaryCover;

export const Information = styled.div`
  z-index: 1;
  width: 100%;
  margin: -90px auto 0 auto;
  order: 2;

  padding: 1.5rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};

  ${createMinWidthMediaQuery("medium")} {
    order: 1;
    max-width: 45%;
    background-color: transparent;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    left: ${({ theme }) => theme.spacing.four};
  }
`;

export const Title = styled(Headline1)`
  ${createMinWidthMediaQuery("medium")} {
    font-size: calc(3rem + (16 * (100vw - 768px)) / 671);
    font-weight: 700;
    line-height: 1.25;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75;
  margin: 0px;
  margin-top: ${({ theme }) => theme.spacing.two};
  margin-bottom: ${({ theme }) => theme.spacing.three};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;

  grid-gap: ${({ theme }) => theme.spacing.three};
  // margin-top: ${({ theme }) => theme.spacing.two};

  ${createMinWidthMediaQuery("small")} {
    grid-template-columns: auto auto;

    // margin-top: ${({ theme }) => theme.spacing.four};
  }
`;
