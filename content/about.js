import { ROUTE_PATHS, ROUTE_PATHS_US } from "../routes/routes.constants";

export const about = {
  componentType: "page",
  id: "0a98sdf0s0dahd",
  props: {
    title: "About Us | hims",
    id: "aboutPage",
    description: "About Page",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.about
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.about
      }
    ],
    sections: [
      {
        componentType: "color-block",
        id: "about-color-block-initial-child",
        props: {
          backgroundColor: "grayPink",
          imageAltText:
            "A red-green croton plant, with tall, healthy leaves, in an earth-toned plant pot",
          sections: [
            {
              componentType: "landing-hero",
              id: "zV86Yi06iVCbZDIXB3iV",
              props: {
                title: "Handsome, healthy you.",
                description: `Hims is about personal wellness. You should look and feel your best all the time. Our job is to make that easy and affordable.`,
                image: "himsuk-about-landing-{imageSize}"
              }
            },
            {
              componentType: "center-align-text-with-eyebrow",
              id: "about-page-center-align-text-with-eyebrow-1",
              props: {
                id: "about-page-center-align-text-with-eyebrow-1",
                smallText:
                  "We hope to enable a conversation that’s currently closeted. Men aren’t supposed to care for themselves. What a load of bollocks. The people who depend on you and care about you want you to. To do the most good, you must be well.",
                largeText:
                  "We hope to enable a conversation that’s currently closeted. Men aren’t supposed to care for themselves. What a load of bollocks. The people who depend on you and care about you want you to. To do the most good, you must be well.",
                eyebrowText:
                  "Men are allowed to want to take care of themselves"
              }
            }
          ]
        }
      },
      {
        componentType: "color-block",
        id: "about-color-block-initial-child",
        props: {
          backgroundColor: "primary",
          sections: [
            {
              componentType: "block",
              id: "about-page-spacing-block-1",
              props: {
                pt: "6"
              }
            },
            {
              componentType: "fifty-fifty-about-callout",
              id: "about-page-callout",
              props: {
                id: "about-page-callout",
                title: "less than 10%",
                body:
                  "Only 1 in 10 guys feel comfortable talking about their looks and health with their doctor. Turns out that's a pretty big problem when they've got the keys to the cabinet.",
                imageId: "hims-about-callout-01",
                stacksOnTop: "left"
              }
            }
          ]
        }
      },
      {
        componentType: "color-block",
        id: "about-color-block-root",
        props: {
          backgroundColor: "blue",
          sections: [
            {
              componentType: "block",
              id: "about-page-spacing-block-2",
              props: {
                pt: "6"
              }
            },
            {
              componentType: "center-align-text-with-eyebrow",
              id: "about-page-center-align-text-with-eyebrow-2",
              props: {
                id: "about-page-center-align-text-with-eyebrow-2",
                smallText:
                  "Thanks to Hims, men now have easier access to the care they need.",
                largeText:
                  "Thanks to Hims, men now have easier access to the care they need.",
                eyebrowText: "Do Your Future Self a Favour"
              }
            },
            {
              componentType: "image-block",
              id: "about-page-image-block-1",
              props: {
                image: "hims-about-fullwidth-01",
                title: "Young men with their faces obscured"
              }
            }
          ]
        }
      }
    ]
  }
};
