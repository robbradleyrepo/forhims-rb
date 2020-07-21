"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class AddressRecord extends Component {
  renderField(field) {
    const { fieldsToHighlight = {}, address } = this.props;
    const highlightField = fieldsToHighlight[field];
    return (
      <span className={classNames(false, { highlightField })}>
        {address[field]}
      </span>
    );
  }
  render() {
    const { address } = this.props;
    if (!address) {
      return null;
    }
    return (
      <div className="address-record">
        <div className="address-record__line1">
          <span>{this.renderField("line1")}</span>
          {address.line2 && (
            <span className="address-record__line2">
              , {this.renderField("line2")}
            </span>
          )}
        </div>
        <div className="address-record__city-state">
          {this.renderField("city")}, {this.renderField("state")}
        </div>
        <div className="">{this.renderField("zip")}</div>
        <div className="">UK</div>
      </div>
    );
  }
}

AddressRecord.propTypes = {
  address: PropTypes.object,
  fieldsToHighlight: PropTypes.object
};

AddressRecord.displayName = "AddressRecord";

export default AddressRecord;
