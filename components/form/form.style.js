import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.form.error};
  margin-top: ${({ theme }) => theme.spacing.two};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 1;
  min-height: 1em;

  &:empty {
    display: none;
  }
`;
