"use strict";

import { Button } from "../button";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

import { blobToBase64, base64ToBlob } from "../../utils/image";
import { Block } from "../block";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../theme/breakpoints";

const TAKE_PHOTO = "Take Photo";
const UPLOAD_PHOTO = "Upload Photo";

const ButtonWithMargin = styled(Button)`
  margin-right: 20px;
`;

class WebcamCapture extends React.Component {
  setRef(webcam) {
    this.webcam = webcam;
  }

  capture() {
    let base64 = this.webcam.getScreenshot();

    // When site is
    if (!base64) {
      return;
    }

    let strippedBase64 = R.last(R.split(";base64,", base64));

    this.props.setImage({
      image: {
        blob: base64ToBlob(strippedBase64, "image/jpeg"),
        mimeType: "image/jpeg"
      },
      base64Image: base64
    });
  }

  // onDrop :: [Blobs] -> IPC
  onDrop(files) {
    let blob = files[0];
    blobToBase64(blob)
      .then(base64 =>
        this.props.setImage({
          image: { blob, mimeType: blob.type },
          base64Image: base64
        })
      )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { examplePhoto } = this.props;
    return (
      <Block>
        <Block>
          <Dropzone
            ref={node => (this.dropzoneRef = node)}
            onDrop={blobs => this.onDrop(blobs)}
            style={{ visibility: "hidden" }}
          />
          <Block>
            {examplePhoto && (
              <Block>
                <span>Here&apos;s an example</span>
                <img
                  // src={makeCdnPath(`images/visit/${examplePhoto}`)}
                  src={`images/visit/${examplePhoto}`}
                />
              </Block>
            )}
          </Block>
          <Block>
            {!examplePhoto && <Block />}
            <Block>
              <MediaQuery minWidth={breakpoints.small + 1}>
                <Webcam
                  audio={false}
                  height={266}
                  ref={this.setRef.bind(this)}
                  screenshotFormat="image/jpeg"
                  width={350}
                />
              </MediaQuery>
              <MediaQuery maxWidth={breakpoints.small}>
                <Webcam
                  audio={false}
                  height={160}
                  ref={this.setRef.bind(this)}
                  screenshotFormat="image/jpeg"
                  width={212}
                />
              </MediaQuery>
            </Block>
          </Block>
        </Block>
        <Block>
          <MediaQuery maxWidth={breakpoints.small}>
            <Button
              onClick={() => this.dropzoneRef.open()}
              label={TAKE_PHOTO}
            />
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.small}>
            <ButtonWithMargin
              onClick={this.capture.bind(this)}
              label={TAKE_PHOTO}
            />
            <Button
              onClick={() => this.dropzoneRef.open()}
              label={UPLOAD_PHOTO}
            />
          </MediaQuery>
        </Block>
      </Block>
    );
  }
}

WebcamCapture.defaultProps = {};

WebcamCapture.propTypes = {
  examplePhoto: PropTypes.string,
  setImage: PropTypes.func.isRequired
};

WebcamCapture.displayName = "WebcamCapture";

export default WebcamCapture;
