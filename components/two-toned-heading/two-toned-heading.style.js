import styled from "styled-components";

const HeadingSpan = styled.span`
  display: inline-block;
  width: 100%;
`;

export const HeadingDarkColor = styled(HeadingSpan)`
  color: ${props => props.theme.colors.text.primary};
`;

export const HeadingLightColor = styled(HeadingSpan)`
  color: ${props => props.theme.colors.text.secondary};
`;
