"use strict";

import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import ReactMarkdown from "react-markdown";
import toc from "./toc";

class BailyHealthTermsOfService extends React.Component {
  render() {
    let state = R.find(
      x => R.toLower(x.name) === R.toLower(this.props.state.name),
      this.props.states
    );
    let source = R.compose(
      R.replace(/{{state}}/gi, R.replace(/\s+/gi, "", state.name)),
      R.replace(/{{legalEntity}}/gi, state.legalEntity)
    )(toc);

    return (
      <div className="generic-page p-t-lg p-b-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ReactMarkdown source={source} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BailyHealthTermsOfService.defaultProps = {};

BailyHealthTermsOfService.propTypes = {
  state: PropTypes.object,
  states: PropTypes.array
};

BailyHealthTermsOfService.displayName = "BailyHealth";

export default BailyHealthTermsOfService;
