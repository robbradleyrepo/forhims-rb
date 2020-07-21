import { treatmentFinasterideContent } from "./treatment.constants";
import { ROUTE_PATHS_US, ROUTE_PATHS } from "../../routes/routes.constants";

export const treatmentFinasteride = {
  componentType: "page",
  id: "finasteride-treatment-page",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.treatmentHairFinasteride
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.treatmentHairFinasteride
      }
    ],
    sections: [
      {
        componentType: "treatment-plan",
        props: {
          title: "Hair Loss Prevention and Regrowth - Finasteride",
          description:
            "This treatment plan reviews the risks and benefits of the treatment we are recommending. Please make sure to read it and the manufacturer’s leaflet that comes with the medicine. The manufacturer’s leaflet contains the full information on interactions, side eﬀects, and other important information you should know about the medicine before you start.",
          content: treatmentFinasterideContent
        }
      }
    ]
  }
};
