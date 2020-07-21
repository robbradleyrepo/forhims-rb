import React from "react";
import PropTypes from "prop-types";

import config from "../../config";
import { Block } from "../block";

const TRUSTPILOT_WIDGET_SRC =
  "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
const TRUSTPILOT_WIDGET_ID = "trustpilot-widget";
const WIDGET_MAX_WIDTH = "255px";

export class TrustPilotBadge extends React.Component {
  container = React.createRef();

  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = TRUSTPILOT_WIDGET_SRC;
    this.container.current.appendChild(s);
  }

  render() {
    const { className = "" } = this.props;
    const { locale, templateId, accountId, url } = config.trustPilot;
    return (
      <Block maxWidth={WIDGET_MAX_WIDTH}>
        <div
          className={`${TRUSTPILOT_WIDGET_ID} ${className}`}
          data-locale={locale}
          data-template-id={templateId}
          data-businessunit-id={accountId}
          data-style-height="90px"
          data-style-width="100%"
          data-theme="dark"
          ref={this.container}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Trustpilot
          </a>
        </div>
      </Block>
    );
  }
}
TrustPilotBadge.propTypes = {
  className: PropTypes.string
};
