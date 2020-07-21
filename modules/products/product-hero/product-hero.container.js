import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { productHeroSelectors } from "./product-hero.selectors";
import { ProductHeroComponent } from "./product-hero.component";
import { showDrawerWithContentId } from "../../../actions/drawer";

const dispatchers = {
  showDrawer: showDrawerWithContentId
};

export const ProductHero = compose(
  connect(
    productHeroSelectors,
    dispatchers
  ),
  withHandlers({
    handleViewSafetyInformation: ({ showDrawer }) => () => {
      showDrawer("safetyInformation");
    }
  })
)(ProductHeroComponent);
