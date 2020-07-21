import styled from "styled-components";

import { TextField } from "../../text-field";

export const CenteredTextField = styled(TextField)`
  input,
  label {
    text-align: center;
  }
  label {
    transform-origin: center top;
  }
`;
