import React from "react";
import PropTypes from "prop-types";
import R from "ramda";
import MediaQuery from "react-responsive";

import { Button } from "../../button";
import { Loading } from "../../loading";
import Dropzone from "../../dropzone";
import WebCam from "../../webcam";
import { fileSize } from "../../../utils";
import { isSupportedMimeType } from "../../../utils/image";
import { Block } from "../../block";
import { P, Headline4 } from "../../fonts";
import { FormError } from "../../form-error";
import { breakpoints } from "../../../theme/breakpoints";

import { upload, markVisitAsAnswered, updateMessage } from "./http";
import {
  Container,
  ImagePreviewContainerRow,
  ImagePreviewContainerColumn,
  SquareImage,
  RetakeButton,
  SquareRetakeButton
} from "./photo-upload.style";

const IMG_SIZE_TOO_LARGE =
  "Image uploads are limited to 15Mb. Please use a smaller image.";

const UNSUPPORTED_MIME_TYPE =
  "Failed to upload image; the format is not supported.";

/**
 * @module EmbeddedPhotoUpload
 */

class EmbeddedPhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      base64Image: null,
      dropZoneActive: false,
      error: null,
      image: null,
      uploading: false,
      uploaded: false
    };
  }

  // Invoked by ViewShot component
  setImage(params) {
    if (!isSupportedMimeType(params.image)) {
      this.setState({ error: UNSUPPORTED_MIME_TYPE });
      $GTM.uploadPhoto.failure({
        error: UNSUPPORTED_MIME_TYPE,
        data: {
          mimeType: params.image.blob.mimeType
        }
      });
    } else if (fileSize(params.image.blob.size) > 15) {
      this.setState({ error: IMG_SIZE_TOO_LARGE });
      $GTM.uploadPhoto.failure({
        error: IMG_SIZE_TOO_LARGE,
        data: {
          size: params.image.blob.size
        }
      });
    } else {
      this.setState({ error: null });
      $GTM.selectPhoto.trigger(this.getActionDetails());
      this.setState(params);
    }
  }

  deactivateDropZone() {
    this.setState({ dropZoneActive: false });
  }

  activateDropZone() {
    this.setState({ dropZoneActive: true });
  }

  getActionDetails() {
    return {
      visit: { id: this.props.visitId },
      photoId: this.props.photoId
    };
  }

  accept() {
    // nnasoody: prevent double click from double submitting
    if (this.state.uploading) {
      return;
    }
    // Uploading...
    this.setState({ uploading: true });

    $GTM.uploadPhotoEmrMessage.trigger(this.getActionDetails());
    // API call!
    upload({
      reUpload: true,
      compressionEnabled: this.props.compressionEnabled,
      uploadQuality: this.props.uploadQuality,
      image: this.state.image,
      photoId: this.props.photoId,
      visit: { id: this.props.visitId }
    })
      .then(() => markVisitAsAnswered(this.props.visitId))
      .then(() => updateMessage(this.props.message))
      .then(
        R.compose(
          this.props.updateMessageResp,
          R.head
        )
      )
      .then(this.onUploadSuccess.bind(this))
      .catch(this.onUploadFail.bind(this));
  }

  onUploadFail(error) {
    $GTM.uploadPhotoEmrMessage.failure({
      error: error.message,
      data: this.getActionDetails()
    });
    this.setState({ error: error.message, uploading: false });
  }

  onUploadSuccess() {
    $GTM.uploadPhotoEmrMessage.success(this.getActionDetails());
    this.setState({
      uploading: false,
      uploaded: true
    });
  }

  reject() {
    $GTM.retakePhotoEmrMessage.trigger(this.getActionDetails());
    this.setState({ image: null, base64Image: null });
  }

  content() {
    let { error, uploading, base64Image } = this.state;
    let imageContainer = null;

    imageContainer = <SquareImage src={base64Image} />;

    let actionButtons = (
      <Block>
        <MediaQuery minWidth={breakpoints.small}>
          <ImagePreviewContainerRow>
            {imageContainer}
            <SquareRetakeButton
              onClick={this.reject.bind(this)}
              label={"Retake"}
            />
          </ImagePreviewContainerRow>
          <Block>
            <Block>
              <Button
                onClick={this.accept.bind(this)}
                label={uploading ? "Uploading photo..." : "Use Photo"}
                disabled={uploading}
              />
            </Block>
          </Block>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.small}>
          <ImagePreviewContainerColumn>
            {imageContainer}
            <RetakeButton onClick={this.reject.bind(this)} label={"Retake"} />
          </ImagePreviewContainerColumn>
          <Block>
            <Block>
              <Button
                fullWidth={true}
                onClick={this.accept.bind(this)}
                label={uploading ? "Uploading photo..." : "Use Photo"}
                disabled={uploading}
              />
            </Block>
          </Block>
        </MediaQuery>
      </Block>
    );

    let webcam = (
      <div className="emr-form__webcam-image-frame">
        <div>
          <WebCam setImage={this.setImage.bind(this)} />
        </div>
      </div>
    );

    return (
      <div className="emr-form__upload-photos">
        {base64Image ? actionButtons : webcam}
        {error && (
          <Block mt={3}>
            <FormError>{error}</FormError>
          </Block>
        )}
      </div>
    );
  }

  render() {
    return (
      <Container className={this.props.className}>
        {this.state.uploaded ? (
          <Block pt={5} pb={5}>
            <Headline4>Photo uploaded.</Headline4>
          </Block>
        ) : this.state.uploading ? (
          <Block pt={5} pb={5}>
            <Block>
              <Block mb={4}>
                <Headline4>Uploading Photo...</Headline4>
                <P>Hang tight!</P>
              </Block>
              <Block display="flex" justifyContent="center">
                <Loading />
              </Block>
            </Block>
          </Block>
        ) : (
          <Block onDragEnter={this.activateDropZone.bind(this)}>
            <Dropzone
              className="emr-form__dropzone"
              deactivateDropZone={this.deactivateDropZone.bind(this)}
              visible={this.state.dropZoneActive}
              setImage={this.setImage.bind(this)}
            />
            <Block>{this.content()}</Block>
          </Block>
        )}
      </Container>
    );
  }
}

EmbeddedPhotoUpload.defaultProps = {};

EmbeddedPhotoUpload.propTypes = {
  className: PropTypes.string,
  compressionEnabled: PropTypes.bool,
  message: PropTypes.object,
  photoId: PropTypes.string,
  updateMessageResp: PropTypes.func,
  uploadQuality: PropTypes.number,
  visitId: PropTypes.string
};

EmbeddedPhotoUpload.displayName = "EmbeddedPhotoUpload";

export default EmbeddedPhotoUpload;
