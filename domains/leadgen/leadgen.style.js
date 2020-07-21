import styled, { css } from "styled-components";

import { Headline1 } from "../../components/fonts";

export const LeadgenHeading = styled(Headline1)`
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
`;

export const leadgenFlexilistStyles = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing.three};
  max-width: ${({ theme }) => `calc(100% - ${theme.spacing.three})`};

  > * {
    flex: 0 0 calc(${(1 / 5) * 100}% - ${({ theme }) => theme.spacing.three});
    margin: ${({ theme }) => theme.spacing.three};
  }
`;

export const leadgenSectionStyles = css`
  margin: 0 auto;
  width: 100%;
  background-color: ${({ color = "transparent" }) => color};

  padding: ${({ theme }) => theme.spacing.six} 0;
`;
