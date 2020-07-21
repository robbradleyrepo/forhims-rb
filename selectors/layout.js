import { createSelector, createStructuredSelector } from "reselect";
import R from "ramda";

const selectRoutingState = R.path(["routing", "locationBeforeTransitions"]);

const selectConfigState = R.path(["config"]);

const selectLocationFromRoutingState = createSelector(
  selectRoutingState,
  R.propOr("", "pathname")
);

const selectMaintenanceState = createSelector(
  selectConfigState,
  R.propOr(false, "maintenance")
);

const selectIsUnderMaintenance = createSelector(
  selectMaintenanceState,
  R.equals(true)
);

const selectIsNotOnMaintenancePage = createSelector(
  selectLocationFromRoutingState,
  R.pipe(
    R.match(/maintenance/),
    R.isEmpty
  )
);

const selectFooterColumns = R.always([
  [
    {
      title: "Have a question?",
      items: [
        { url: "mailto:support@forhims.co.uk", label: "support@forhims.co.uk" }
      ]
    },
    {
      title: "Press inquiries?",
      items: [
        { url: "mailto:press@forhims.co.uk", label: "press@forhims.co.uk" }
      ]
    }
  ],
  [
    {
      title: "Learn",
      isCollapsible: true,
      items: [
        { url: "/blog", label: "Savoir Faire" },
        { url: "/about", label: "About Us" }
      ]
    }
  ],
  [
    {
      title: "Guides",
      isCollapsible: true,
      items: [
        { url: "https://himsuk.zendesk.com/hc/en-us", label: "Help" }
        //  { url: '/treatment', label: 'Treatment Plans' },
      ]
    }
  ]
]);

export const layoutConnector = createStructuredSelector({
  isUnderMaintenance: selectIsUnderMaintenance,
  isNotOnMaintenancePage: selectIsNotOnMaintenancePage,
  footerColumns: selectFooterColumns
});
