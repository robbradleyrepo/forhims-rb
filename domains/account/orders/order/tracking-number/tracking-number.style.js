import styled from "styled-components";

export const TrackingNumberLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.text.primary};

  &:visited {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.text.active};
  }

  img {
    height: 30px;
    width: 30px;
  }
`;
