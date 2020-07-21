export const numberInRange = (min, max) => (props, propName, componentName) => {
  // undefined values are OK
  if (props[propName] === undefined) return;

  const type = typeof props[propName];

  if (type !== "number")
    return new Error(
      `Invalid prop \`${propName}\` of value \`${
        props[propName]
      }\` supplied to \`${componentName}\`. Expected prop to be a number, but has type of \`${type}\`.`
    );

  const inRange = props[propName] >= min && props[propName] <= max;

  if (!inRange)
    return new Error(
      `Invalid prop \`${propName}\` of value \`${
        props[propName]
      }\` supplied to \`${componentName}\`. Expected prop to be a number between \`${min}\` and \`${max}\`.`
    );
};
