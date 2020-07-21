import styled from "styled-components";

import { ButtonReset } from "../elements";

export const CircleButton = styled(ButtonReset)`
  align-items: center;
  border: ${({ theme }) => theme.borders.coloredDivider};
  border-radius: 50%;
  border-color: ${({ borderColor }) => borderColor};
  display: flex;
  height: ${({ theme }) => theme.sizing.badge};
  justify-content: center;
  width: ${({ theme }) => theme.sizing.badge};

  &:active,
  &:focus,
  &:hover {
    border-color: ${props => props.hoverBorderColor};
  }
`;
