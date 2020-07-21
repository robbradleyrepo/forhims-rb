import styled from "styled-components";
import { createCloudinaryDesktopUrl } from "../../../../utils/cloudinary";

export const CartEmptyPlaceholder = styled.div`
  background-image: url(${createCloudinaryDesktopUrl("hims-empty-cart-comb")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 40vh;
  width: auto;
`;
