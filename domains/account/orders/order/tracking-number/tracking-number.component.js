import React from "react";
import PropTypes from "prop-types";

import { LabelValue } from "../label-value";
import { TrackingNumberLink } from "./tracking-number.style";
import { createTrackingUrl } from "./tracking-number.utils";

export const TrackingNumber = ({ trackingNumber }) => (
  <LabelValue
    label="Tracking Number"
    value={
      trackingNumber ? (
        <TrackingNumberLink
          href={createTrackingUrl(trackingNumber)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {trackingNumber}
        </TrackingNumberLink>
      ) : (
        "-"
      )
    }
  />
);
TrackingNumber.propTypes = {
  trackingNumber: PropTypes.string
};
