import React from "react";
import { storiesOf } from "@storybook/react";
import { toastr } from "react-redux-toastr";
import { text, select } from "@storybook/addon-knobs";
import { withRedux } from "../../utils/storybook";
import { Button } from "../../components/button";
import { Toastr } from "./toastr.component";

storiesOf("Components|Toast", module)
  .addDecorator(withRedux)
  .add("Toast Notification Variants", () => {
    const title = text("title", "Invalid Login");
    const message = text("message", "Email or password incorrect");
    const position = text("position", "bottom-right");
    const toastOptions = {
      transitionIn: "fadeIn",
      transitionOut: "fadeOut",
      timeOut: 0,
      position: position,
      closeOnToastrClick: false
    };
    const toastType = select(
      "Toast type",
      ["success", "info", "warning", "error"],
      "error",
      "toast-type"
    );

    return (
      <div>
        <Button
          onClick={() => {
            switch (toastType) {
              case "success":
                toastr.success(title, message, toastOptions);
                break;
              case "info":
                toastr.info(title, message, toastOptions);
                break;
              case "warning":
                toastr.warning(title, message, toastOptions);
                break;
              case "error":
                toastr.error(title, message, toastOptions);
                break;
              default:
                toastr.error(title, message, toastOptions);
            }
          }}
          label={"SHOW TOAST"}
        >
          Show Toast
        </Button>
        <Toastr />
      </div>
    );
  });
