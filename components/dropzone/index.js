"use strict";

import PropTypes from "prop-types";
import React from "react";
import ReactDropZone from "react-dropzone";

/*
 * @module Dropzone
 */

class Dropzone extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  // onDrop :: [Blobs] -> IPC
  onDrop(files) {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.props.setBase64Image(reader.result, files[0]);
      },
      false
    );
    reader.readAsDataURL(files[0]);
    this.props.deactivateDropZone();
  }

  render() {
    return (
      <ReactDropZone
        className="fill dropzone"
        style={{ display: this.props.visible ? "block" : "none" }}
        onDragLeave={this.props.deactivateDropZone}
        onDrop={this.onDrop.bind(this)}
      >
        <div>
          <div className="flex-center spandex">
            <div className="text-center">
              <h3>
                <span className="dragndropimages" />
                <span>Drag and Drop</span>
              </h3>
            </div>
          </div>
        </div>
      </ReactDropZone>
    );
  }
}

Dropzone.propTypes = {
  deactivateDropZone: PropTypes.func,
  setBase64Image: PropTypes.func,
  visible: PropTypes.bool
};

Dropzone.displayName = "Dropzone";

export default Dropzone;
