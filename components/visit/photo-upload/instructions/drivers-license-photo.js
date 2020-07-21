import PropTypes from "prop-types";
import React from "react";
import { Button, BUTTON_VARIANTS } from "../../../button";
import { MODAL_COMPONENT_IDENTIFIERS } from "../../../../domains/modal/components/helpers/component-id-mapping";

const DriversLicensePhoto = props => (
  <Button
    onClick={() =>
      props.openModal({
        content: {
          id: MODAL_COMPONENT_IDENTIFIERS.EMR_DRIVERS_LICENCE_PHOTO_DISCLAIMER
        },
        disableCloseOnEscapeKeypress: true
      })
    }
    label={"Why do we need this ?"}
    variant={BUTTON_VARIANTS.FLAT}
    fullWidth={false}
  />
);

DriversLicensePhoto.propTypes = {
  openModal: PropTypes.func
};

DriversLicensePhoto.displayName = "DriversLicensePhoto";

export default DriversLicensePhoto;
