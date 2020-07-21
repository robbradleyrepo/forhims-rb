import styled from "styled-components";

import { BodySmall } from "../fonts";

export const FormErrorLabel = styled(BodySmall)`
  background-color: ${({ theme }) => theme.colors.canvas.error};
  border: 1px solid ${({ theme }) => theme.colors.form.error};
  color: ${({ theme }) => theme.colors.form.error};
  padding: ${({ theme }) => theme.spacing.three};
`;
