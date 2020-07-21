import styled from "styled-components";

import { leadgenFlexilistStyles, leadgenSectionStyles } from "../leadgen.style";
import { Subheadline } from "../../../components/fonts";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";

export const Frame = styled.div`
  text-align: center;

  ${leadgenSectionStyles};
`;

export const TestimonialList = styled.ul`
  ${leadgenFlexilistStyles};
`;

export const Testimonial = styled.li`
  min-width: 220px;

  &:nth-of-type(n + 3) {
    display: none;
  }

  ${createMinWidthMediaQuery("medium")} {
    &:nth-of-type(n + 3) {
      display: block;
    }
  }
`;

export const Quote = styled(Subheadline)`
  font-style: italic;
`;

export const Source = styled(Subheadline)`
  position: relative;
  display: inline-block;

  margin-top: ${({ theme }) => theme.spacing.three};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &::before {
    content: "";
    height: 1px;
    width: 22px;
    position: absolute;
    top: 50%;
    transform: translateX(-100%);

    left: -${({ theme }) => theme.spacing.two};
    background-color: ${({ theme }) => theme.colors.ui.separator};
  }
`;
