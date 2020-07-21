import styled from "styled-components";
import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../utils/breakpoints";
import { ButtonLink } from "../../components/button/button.component";
import { Picture } from "../../components/picture";

export const ImageTornadoBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  justify-content: center;
  background-size: cover;
  height: 103vw;

  ${createMinWidthMediaQuery("medium")} {
    background-image: url(${({ bgImages }) => bgImages[2]});
  }
  ${createMinWidthMediaQuery("large")} {
    background-image: url(${({ bgImages }) => bgImages[3]});
  }
`;

export const FullWidthImage = styled(Picture)`
  width: 100%;
  height: auto;
  display: block;

  > * {
    width: 100%;
  }
`;

export const TornadoButton = styled(ButtonLink)`
  margin-top: ${({ theme }) => theme.spacing.three};
`;

export const TextContent = styled.div`
  text-align: center;

  ${createMaxWidthMediaQuery("medium")} {
    margin: ${({ theme }) => theme.spacing.four} 24px;
  }

  ${createMinWidthMediaQuery("medium")} {
    max-width: 45%;
  }
`;
