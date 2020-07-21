import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import config from "./config";
import Dropzone from "../../dropzone";
import { Button } from "../../button";
import WebCam from "../../webcam";
import { fileSize } from "../../../utils";
import { isSupportedMimeType } from "../../../utils/image";
import { upload, fetchImages } from "./http";
import { Block } from "../../block";
import { breakpoints } from "../../../theme/breakpoints";
import MediaQuery from "react-responsive";

import {
  Container,
  ImagePreviewContainerRow,
  ImagePreviewContainerColumn,
  SquareImage,
  RetakeButton,
  SquareRetakeButton
} from "./photo-upload.style";
import { toastrEmitter } from "../../../modules/toastr/toastr.actions";
import { PhotoProgressBar } from "./photo-progress-bar";

const MAX_IMG_SIZE = 10;

const IMG_SIZE_TOO_LARGE = `Image uploads are limited to ${MAX_IMG_SIZE}Mb. Please use a smaller image.`;

const UNSUPPORTED_MIME_TYPE =
  "Failed to upload image; the format is not supported.";

const DEMO_COMPLETION_MESSAGE =
  "This account is for demo purposes. The medical form will not be submitted.";

const DEMO_EMAIL_ADDRESSES = ["appledemo@forhims.com"];
/**
 * @module UploadPhotos
 */

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.config = config[props.emrVisitType];
    // state
    this.state = {
      base64Image: null,
      dropZoneActive: false,
      error: false,
      image: null,
      uploading: false,
      viewShotIndex: 0
    };
  }

  setBase64Image(base64Image, blob) {
    this.setState({
      base64Image,
      image: {
        blob
      }
    });
  }

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
      $GTM.selectPhoto.trigger({ type: this.getPhotoType() });
      this.setState(params, this.scrollToEmrBody);
    }
  }

  deactivateDropZone() {
    this.setState({ dropZoneActive: false });
  }

  activateDropZone() {
    this.setState({ dropZoneActive: true });
  }

  getPhotoType() {
    return this.config.viewShots[this.state.viewShotIndex].type;
  }

  accept() {
    // nnasoody: prevent double click from double submitting
    if (this.state.uploading) {
      return;
    }
    // Uploading...
    this.setState({ uploading: true });
    // Lookup image type e.g. selfie, back, ...
    let photoType = this.getPhotoType();

    $GTM.uploadPhoto.trigger({ type: photoType });
    // fetch pre-uploaded photos
    fetchImages(this.props.visit)
      // upload picture
      .then(pictures => {
        let existingPhoto = pictures[photoType];
        return upload({
          reUpload: !!existingPhoto, // Has it been already uploaded?
          compressionEnabled: this.props.compressionEnabled,
          image: this.state.image,
          photoType: photoType,
          uploadQuality: this.props.uploadQuality,
          visit: this.props.visit,
          photoId: existingPhoto ? existingPhoto.id : null
        });
      })
      .then(this.onUploadSuccess.bind(this))
      .catch(this.onUploadFail.bind(this));
  }

  onUploadFail(error) {
    $GTM.uploadPhoto.failure({
      error: error.message,
      data: { type: this.getPhotoType() }
    });

    console.log(error);

    this.setState(
      {
        error: error.message,
        uploading: false
      },
      this.scrollToEmrBody
    );
  }

  onUploadSuccess() {
    $GTM.uploadPhoto.success({ type: this.getPhotoType() });

    this.props.photoUploadSuccess && this.props.photoUploadSuccess();

    // All photos taken? Proceed
    if (this.state.viewShotIndex === this.config.viewShots.length - 1) {
      // Demo account? Bail!
      if (R.contains(this.props.me.email, DEMO_EMAIL_ADDRESSES)) {
        this.props.closeEmrForm();
        toastrEmitter.info({ message: DEMO_COMPLETION_MESSAGE });
      }
      // Submit otherwise
      else {
        this.props.submitEmrForm({
          onSuccess: this.props.closeEmrForm,
          onError: this.onErrorSubmitHandler.bind(this)
        });
      }
    } else {
      // otherwise update state
      this.setState(
        {
          uploading: false,
          viewShotIndex: this.state.viewShotIndex + 1,
          image: null,
          base64Image: null
        },
        this.scrollEmrFrame
      );
    }
  }

  onErrorSubmitHandler() {
    let newState = {
      uploading: false,
      error: "Failed to submit visit. Please contact support_uk@forhims.co.uk"
    };
    this.setState(newState, this.scrollToEmrBody);
  }

  reject() {
    $GTM.retakePhoto.trigger({ type: this.getPhotoType() });
    this.setState({ image: null, base64Image: null }, this.scrollEmrFrame);
  }

  content() {
    let { error, uploading, base64Image } = this.state;
    let imageContainer = null;

    if (this.getPhotoType() === "id") {
      imageContainer = <SquareImage width="300px" src={base64Image} />;
    } else {
      imageContainer = <SquareImage src={base64Image} />;
    }

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

    const examplePhoto = this.config.viewShots[this.state.viewShotIndex]
      .examplePhoto;

    let webcam = (
      <div className="emr-form__webcam-image-frame">
        <div>
          <WebCam
            examplePhoto={
              this.getPhotoType() !== "selfie" ? examplePhoto : null
            }
            setImage={this.setImage.bind(this)}
          />
        </div>
      </div>
    );

    return (
      <div className="emr-form__upload-photos">
        {base64Image ? actionButtons : webcam}
        {error && <div className="form-error m-t">{error}</div>}
      </div>
    );
  }

  render() {
    return (
      <Container>
        <PhotoProgressBar
          activeStep={this.state.viewShotIndex}
          steps={this.config.viewShots}
        />
        {this.state.uploading && (
          <Block>
            <Block>
              <h2>Uploading Photo...</h2>
              <Block>Hang tight!</Block>
            </Block>
          </Block>
        )}
        <Block onDragEnter={this.activateDropZone.bind(this)}>
          <Dropzone
            className="emr-form__dropzone"
            deactivateDropZone={this.deactivateDropZone.bind(this)}
            visible={this.state.dropZoneActive}
            setBase64Image={this.setBase64Image.bind(this)}
          />
          <Block>
            <h3>{this.config.viewShots[this.state.viewShotIndex].title}</h3>
            <Block>
              {this.config.viewShots[this.state.viewShotIndex].instructions({
                closeModal: this.props.closeModal,
                openModal: this.props.openModal
              })}
              {/* <div className="m-b-md text-muted"> */}
              {/* You can drag and drop a valid photo to upload. */}
              {/* </div> */}
              {/* <div className="m-b-sm text-muted text-sm"> */}
              {/* <strong>Allowed photo types: </strong> */}
              {/* {`${supportedFormats}. `} */}
              {/* <strong>Max photo size: </strong> */}
              {/* {`${MAX_IMG_SIZE}MB.`} */}
              {/* </div> */}
            </Block>
            {this.content()}
          </Block>
        </Block>
      </Container>
    );
  }
}

UploadPhotos.defaultProps = {};

UploadPhotos.propTypes = {
  closeEmrForm: PropTypes.func,
  closeModal: PropTypes.func,
  compressionEnabled: PropTypes.bool,
  emr: PropTypes.object,
  emrVisitType: PropTypes.string,
  examplePhoto: PropTypes.string,
  next: PropTypes.func,
  prev: PropTypes.func,
  me: PropTypes.object,
  openModal: PropTypes.func,
  setRightDrawer: PropTypes.func,
  submitEmrForm: PropTypes.func,
  uploadQuality: PropTypes.number,
  visit: PropTypes.object,
  photoUploadSuccess: PropTypes.func
};

UploadPhotos.displayName = "UploadPhotos";

export default UploadPhotos;
