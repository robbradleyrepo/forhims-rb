import React from "react";
import { FullScreenModal } from "../../full-screen-modal";
import { FullScreenModalHeading } from "../../full-screen-modal/full-screen-modal.style";
import { Markdown } from "../../markdown";
import {
  modalPropTypes,
  legalModalPropTypes
} from "../../../domains/modal/components/helpers/modal.types";
import { privacyPolicyCopy } from "../../../content/copy/privacy-policy";
import { serviceTermsCopy } from "../../../content/copy/service-terms";
import { userTermsCopy } from "../../../content/copy/user-terms";

const LegalModal = ({ handleClose, title, content }) => (
  <FullScreenModal handleClose={handleClose}>
    <FullScreenModalHeading>{title}</FullScreenModalHeading>
    <Markdown content={content} />
  </FullScreenModal>
);

export const PrivacyPolicyModalContent = ({ closeModal }) => (
  <LegalModal
    title="Privacy Policy (including Cookie Policy)"
    content={privacyPolicyCopy}
    handleClose={closeModal}
  />
);

export const ServiceTermsModalContent = ({ closeModal }) => (
  <LegalModal
    title="Service Terms"
    content={serviceTermsCopy}
    handleClose={closeModal}
  />
);

export const UserTermsModalContent = ({ closeModal }) => (
  <LegalModal
    title="User Terms"
    content={userTermsCopy}
    handleClose={closeModal}
  />
);

LegalModal.propTypes = legalModalPropTypes;
PrivacyPolicyModalContent.propTypes = modalPropTypes;
ServiceTermsModalContent.propTypes = modalPropTypes;
UserTermsModalContent.propTypes = modalPropTypes;
