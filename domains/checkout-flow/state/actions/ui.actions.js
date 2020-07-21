import { SHOW_DRAWER, HIDE_DRAWER } from "../../../../constants/ActionTypes";
import { DRAWER_UI } from "../../../../components/drawer";

export const UI = {
  showCart: () => ({
    type: SHOW_DRAWER,
    payload: {
      ...DRAWER_UI["cart"],
      contentId: "cart"
    }
  }),
  showEmr: () => ({
    type: SHOW_DRAWER,
    payload: {
      ...DRAWER_UI["emr"],
      contentId: "emr"
    }
  }),
  closeCart: () => ({
    type: HIDE_DRAWER
  })
};
