export const addressToLines = ({
  line1,
  line2,
  city,
  state,
  zip,
  country
}) => ({
  addressLine1: line2 ? `${line1}, ${line2}` : line1,
  addressLine2: city,
  addressLine3: zip,
  addressLine4: country
});
