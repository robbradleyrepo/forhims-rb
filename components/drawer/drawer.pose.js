import posed from "react-pose";

import { animations } from "../../theme/motion";
import { isLeft, isRight } from "./drawer.utils";

import { DRAWER_STATES } from "../../constants/ui";

const setOriginXByPosition = ({ position }) =>
  isLeft(position) ? "left" : isRight(position) ? "right" : "center";

const DrawerTransition = {
  duration: animations.speed.xslow,
  ease: animations.easing.spring
};

const DrawerPoses = {
  [DRAWER_STATES.CLOSED]: {
    x: ({ position }) =>
      isLeft(position) ? "-100vw" : isRight(position) ? "100vw" : "",
    opacity: 1,
    originX: setOriginXByPosition,
    transition: DrawerTransition
  },
  [DRAWER_STATES.HALF]: {
    x: ({ isFullWidth, position }) =>
      isFullWidth
        ? "0"
        : isLeft(position)
          ? "-50vw"
          : isRight(position)
            ? "50vw"
            : "",
    opacity: 1,
    originX: setOriginXByPosition,
    transition: DrawerTransition
  },
  [DRAWER_STATES.FULL]: {
    x: 0,
    opacity: 1,
    originX: setOriginXByPosition,
    transition: DrawerTransition
  }
};

export const DrawerPoseComponent = posed.div(DrawerPoses);

const DrawerCloseTransition = {
  delay: animations.speed.xslow,
  duration: animations.speed.default,
  ease: animations.easing.default
};

const DrawerClosePoses = {
  enter: {
    opacity: 1,
    transition: DrawerCloseTransition
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0
    }
  }
};

export const DrawerClosePoseComponent = posed.div(DrawerClosePoses);
