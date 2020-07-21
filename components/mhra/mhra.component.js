import React from "react";
import config from "../../config";

export const MHRA = () => (
  <div id="mhra-fmd-placeholder">
    <a
      href={`http://medicine-seller-register.mhra.gov.uk/search-registry/${
        config.mhra.id
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://pclportal.mhra.gov.uk/analytics/logo-preview-small.png" />
    </a>
  </div>
);
