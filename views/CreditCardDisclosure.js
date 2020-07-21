"use strict";

import React, { Component } from "react";

/**
 * @module CreditCardDisclosure
 */

export default class CreditCardDisclosure extends Component {
  render() {
    return (
      <div className="generic-page message-viewer content-push-down">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 m-t-xxl">
              <h2 className="">Credit Card Disclosure</h2>
              <div className="">
                Your credit card will be charged a one-time non-refundable fee
                of $5 upon the completion of a medical visit. If you are
                approved for a prescription drug, you will be charged a
                membership fee and the cost of the prescription drugs for that
                order. Approximately one month after your first order is
                shipped, you will receive your next order. You will be charged a
                membership fee and the cost of the prescription drugs for that
                order. You will continue to receive monthly shipments at that
                price until you cancel your subscription with us. Information
                about cancelling your subscription is available by sending an
                email to support_uk@forhims.co.uk. The credit card you provide
                today will be stored and it will be charged for each recurring
                monthly shipment. Charges to your credit card will appear as
                hims. Hims, Inc. will store the credit card information I have
                provided and charge recurring monthly charges until I cancel my
                subscription.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreditCardDisclosure.displayName = "CreditCardDisclosure";
