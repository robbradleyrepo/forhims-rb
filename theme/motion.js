import { map } from "ramda";

const addMsToAnimationSpeeds = values => map(value => `${value}ms`)(values);

export const easing = {
  default: "ease",
  enter: "ease-in",
  exit: "ease-out",
  spring: "cubic-bezier(0.33, 0, 0, 1)"
};

export const speed = {
  none: 0,
  xfast: 100,
  fast: 200,
  default: 300,
  medium: 400,
  slow: 500,
  xslow: 600,
  xxslow: 1000
};

// Animation tokens used for Pose animations
// Durations are passed as integers
// Easings are passed as camelCased strings or an array of cubic bezier values
export const animations = {
  easing: {
    default: "easeInOut",
    enter: "easeIn",
    exit: "easeOut",
    spring: [0.33, 0, 0, 1]
  },
  speed
};

// Transitions tokens used for CSS Transitions
// Durations are passed as strings, ex. 200ms
// Easings are passed as strings: kebab-case or a cubic-bezier(values) function
export const transitions = {
  easing,
  speed: addMsToAnimationSpeeds(speed)
};
