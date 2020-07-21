import {
  selectResponsiveDeviceType,
  selectResponsiveFakeWidth
} from "../../../selectors/responsive";
import { createStructuredSelector } from "reselect";

export const productHeroSelectors = createStructuredSelector({
  deviceType: selectResponsiveDeviceType,
  fakeWidth: selectResponsiveFakeWidth
});
