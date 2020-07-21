import { merge } from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import UploadPhotos from "./index";

const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

const ModalSample = styled.div`
  background-color: red;
  height: 200px;
`;

class UploadPhotosTest extends UploadPhotos {
  constructor(props) {
    super(props);

    this.state = merge(this.state, { injectedItemFlag: null });
  }

  componentDidUpdate() {
    let injectedItemFlagProps = this.props.injectedModalItemFlag;

    const modalItem =
      injectedItemFlagProps === "none" ? null : (
        <ModalSample>Sample Text</ModalSample>
      );

    console.log(injectedItemFlagProps, this.state.injectedItemFlag);
    if (injectedItemFlagProps !== this.state.injectedItemFlag) {
      this.setState({ modalItem, injectedItemFlag: injectedItemFlagProps });
    }
  }
}

UploadPhotosTest.propTypes = {
  injectedModalItemFlag: PropTypes.string
};

storiesOf("Components|EMR/Photo", module).add("Upload", () => {
  const injectedModalSelection = select(
    "Inject Modal Component",
    {
      none: "none",
      sample: "sample"
    },
    "none",
    "GRP-1"
  );

  return (
    <Container>
      <UploadPhotosTest
        emr={{}}
        emrVisitType={text("emrVisitType", "ED")}
        examplePhoto={text("examplePhoto", "foo")}
        next={action("next")}
        prev={action("prev")}
        me={{}}
        openModal={action("openModal")}
        setRightDrawer={action("setRightDrawer")}
        submitEmrForm={action("submitEmrForm")}
        uploadQuality={1}
        visit={{}}
        compressionEnabled={false}
        closeModal={action("closeModal")}
        closeEmrForm={action("closeEmrForm")}
        injectedModalItemFlag={injectedModalSelection}
      />
    </Container>
  );
});
