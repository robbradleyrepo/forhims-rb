import { purposeContent } from "./content.constants";

export const purpose = {
  componentType: "page",
  id: "purpose0a98sdf0s0dahd",
  props: {
    title: "Purpose",
    id: "purposePage",
    description: "Purpose",
    sections: [
      {
        componentType: "color-block",
        id: "purpose-color-block-1",
        props: {
          backgroundColor: "blue",
          sections: [
            {
              componentType: "purpose",
              id: "purpose-main-content",
              props: {
                title: "hey there, welcome to hims.",
                content: purposeContent,
                image: "andrew"
              }
            }
          ]
        }
      }
    ]
  }
};
