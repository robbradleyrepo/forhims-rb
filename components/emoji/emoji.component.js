import styled from "styled-components";
import { themeGet } from "styled-system";

// This component encapsulates appearance of emoji across the site
// If we require consistent cross browser emoji styles, those constraints should be applied here
export const Emoji = styled.span`
  font-size: ${({ size }) => themeGet(`fontSizes.${size}`, "")};
`;
