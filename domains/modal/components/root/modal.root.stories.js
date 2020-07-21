import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../../components/block";
import { BodySmall } from "../../../../components/fonts/body-small";
import { ModalContent } from "../default/modal.default.style";
import { modalContentAvailableProps } from "../helpers/modal.types";
import Modal from "./modal.root.component";

const CommonModalComponent = ({ testContent, backgroundColor }) => {
  const closeAction = action("modal-close");
  const isOpen = boolean("Is popup visible", true);

  return (
    <React.Fragment>
      <Block bg={"#FFDDDD"} width={"100vw"} height={"100vh"}>
        {isOpen && (
          <BodySmall margin={0}>
            <a href="#" onClick={() => alert("This shouldn't have happened.")}>
              You shouldn't be able to interact with this part
            </a>
          </BodySmall>
        )}
      </Block>
      <Modal
        backgroundColor={backgroundColor}
        closeModal={closeAction}
        shouldCloseOnClickOverlay={true}
        shouldCloseOnEscapeKeypress={true}
        isOpen={isOpen}
        componentId={"TEST"}
        innerPropsToPass={{}}
        targetComponentKeyToObjectMap={{ TEST: testContent }}
        modal={{ content: { id: "TEST" }, isOpen }}
      />
    </React.Fragment>
  );
};

CommonModalComponent.propTypes = {
  testContent: PropTypes.func,
  backgroundColor: PropTypes.string,
  isOpen: PropTypes.object
};

storiesOf("Domains|Modal/Display Component", module).addWithJSX(
  "with Simple Content",
  () => {
    const testContent = () => <div>Unstyled, simple content</div>;

    return <CommonModalComponent {...{ testContent }} />;
  }
);

storiesOf("Domains|Modal/Display Component", module).addWithJSX(
  "using default styling",
  () => {
    const testContent = () => (
      <ModalContent>Content. Uses the default overlay color.</ModalContent>
    );

    return <CommonModalComponent {...{ testContent }} />;
  }
);

storiesOf("Domains|Modal/Display Component", module).addWithJSX(
  "using default styling + custom overlay color",
  () => {
    const testContent = () => (
      <ModalContent>Content. Overrides overlay color.</ModalContent>
    );
    testContent.propTypes = modalContentAvailableProps;

    return (
      <CommonModalComponent
        {...{ backgroundColor: "#00CACA99", testContent }}
      />
    );
  }
);
