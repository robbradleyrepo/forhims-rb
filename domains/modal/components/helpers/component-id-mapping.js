import { mapObjIndexed } from "ramda";
import DriversLicenseModal from "../../../../components/visit/photo-upload/instructions/drivers-license-modal";
import { CancelSubscriptionContainer } from "../../../account/orders/cancel-subscription";
import {
  PrivacyPolicyModalContent,
  ServiceTermsModalContent,
  UserTermsModalContent
} from "../../../../components/visit/legal-modals";

export const MODAL_COMPONENT_ID_TO_IMPL_MAP = {
  EMR_DRIVERS_LICENCE_PHOTO_DISCLAIMER: DriversLicenseModal,
  EMR_LEGAL_FOOTER_PRIVACY_POLICY: PrivacyPolicyModalContent,
  EMR_LEGAL_FOOTER_SERVICE_TERMS: ServiceTermsModalContent,
  EMR_LEGAL_FOOTER_USER_TERMS: UserTermsModalContent,
  ORDERS_CANCEL_SUBSCRIPTION: CancelSubscriptionContainer
};

export const MODAL_COMPONENT_IDENTIFIERS = mapObjIndexed((num, key) => key)(
  MODAL_COMPONENT_ID_TO_IMPL_MAP
);
