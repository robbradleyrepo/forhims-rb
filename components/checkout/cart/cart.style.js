import styled from "styled-components";

import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { createBootstrapColumnWidth } from "../checkout.utils";

export const CartWrapper = styled.div`
  margin: 0 auto;
  max-width: ${createBootstrapColumnWidth(10)};

  ${createMinWidthMediaQuery("medium")} {
    max-width: ${createBootstrapColumnWidth(8)};
  }
`;
