import React from "react";
import styled from "styled-components";
import { Button } from "../../../button";
import { InfoIcon } from "../../../icons/info-icon";
import { modalPropTypes } from "../../../../domains/modal/components/helpers/modal.types";
import { ModalContent } from "../../../../domains/modal/components/default/modal.default.style";
import { createMinWidthMediaQuery } from "../../../../utils/breakpoints";

export const DriversLicenseModalContent = styled(ModalContent)`
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  ${createMinWidthMediaQuery("medium")} {
    width: 27rem;
  }
`;

const Explanation = styled.section`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  margin-bottom: 1rem;
  text-align: center;
`;

const DriversLicenseModal = props => (
  <DriversLicenseModalContent>
    <InfoIcon />
    <Explanation>
      We use the government ID to verify identity and date of birth. This photo
      is fully encrypted on our hipaa complaint medical platform and is only
      used for diagnosis purposes. Your data will never be used for any other
      purpose or sold to anyone. Medical purposes only.
    </Explanation>
    <Button fullWidth={false} onClick={props.closeModal} label="Got it!" />
  </DriversLicenseModalContent>
);

DriversLicenseModal.propTypes = modalPropTypes;

DriversLicenseModal.displayName = "DriversLicenseModal";

export default DriversLicenseModal;
