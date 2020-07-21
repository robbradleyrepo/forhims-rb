import styled from "styled-components";

import { Block } from "../../../block";
import { combineRems } from "../../../../utils/rem";

export const SmallFieldWrapper = styled(Block)`
  width: ${({ theme }) => theme.spacing.four};
  & label,
  & input {
    text-align: center;
  }
`;

export const FieldWithIconWrapper = styled(Block)`
  & label {
    position: absolute;
    left: ${({ theme }) => combineRems(theme.spacing.three, theme.spacing.two)};
  }
  & input {
    padding-left: ${({ theme }) =>
      combineRems(theme.spacing.three, theme.spacing.two)};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0.4rem;
`;
