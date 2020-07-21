"use strict";

import copy from "./copy";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import { legal } from "../../selectors";

class NoticeOfPrivacyPractices extends React.Component {
  render() {
    let source = R.compose(
      R.replace(/{{legalEntity}}/gi, this.props.listOfStates)
    )(this.props.content);

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

NoticeOfPrivacyPractices.defaultProps = {
  content: copy
};

NoticeOfPrivacyPractices.propTypes = {
  content: PropTypes.string,
  listOfStates: PropTypes.string
};

NoticeOfPrivacyPractices.displayName = "BailyHealth";

export default connect(state => {
  return {
    listOfStates: legal.getListOfStates(state)
  };
})(NoticeOfPrivacyPractices);
