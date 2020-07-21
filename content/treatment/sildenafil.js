import { treatmentSildenafilContent } from "./treatment.constants";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";

export const treatmentSildenafil = {
  componentType: "page",
  id: "sildenafil-treatment-page",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.treatmentSexSildenafil
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.treatmentSexSildenafil
      }
    ],
    sections: [
      {
        componentType: "treatment-plan",
        props: {
          title: "Erectile Dysfunction - PDE5I",
          description:
            "This treatment plan reviews the risks and benefits of the treatment we are recommending. Please make sure to read it and the manufacturer’s leaflet that comes with the medicine. The manufacturer’s leaflet contains the full information on interactions, side eﬀects, and other important information you should know about the medicine before you start.",
          content: treatmentSildenafilContent
        }
      }
    ]
  }
};
