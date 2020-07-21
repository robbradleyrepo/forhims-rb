import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS_US, ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const sexPlp = {
  componentType: "page",
  id: "silenafil874hdso8uqkjdsjk",
  theme: "sex",
  props: {
    title: "Erectile Dysfunction",
    description:
      "Learn about Erectile Dysfunction (ED) and get started with an online consultation to see if treatment is right for you.",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.plpSex
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.plpSex
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "ed-floating-add-to-cart",
        props: {
          label: "Start free consultation",
          productId: PRODUCT_ID_BY_NAME.sildenafil,
          variant: "accent"
        }
      },
      {
        componentType: "color-block",
        id: "ed-color-block-1",
        props: {
          backgroundColor: "primaryLight",
          sections: [
            {
              componentType: "hero",
              props: {
                title: "hard made easy",
                subTitle:
                  "Order online today and get fast ⏩, discreet 🤫 delivery 📦",
                image: "product/hero-plp-sex-slim-{imageSize}",
                imageDimensions: [
                  { width: 720, height: 720 },
                  { width: 720, height: 720 },
                  { width: 2880, height: 1660 },
                  { width: 2880, height: 1660 }
                ],
                actionScrollDownLabel: "See available treatments"
              }
            },
            {
              componentType: "product-list",
              id: "ed-product-list",
              props: {
                category: "sex"
              }
            },
            {
              componentType: "how-it-works",
              id: "homepage-how-it-works",
              props: {
                eyebrowText: "Easy as 1, 2, 3.",
                headlineText: "Trusted, easy, and affordable.",
                cards: [
                  {
                    eyebrowText: "Step 1",
                    headlineText: "Free consultation.",
                    emoji: "✍️",
                    description:
                      "Complete a free and secure online consultation. It can usually be completed inside of 10 minutes."
                  },
                  {
                    eyebrowText: "Step 2",
                    headlineText: "The right treatment for you.",
                    emoji: "👨‍⚕️",
                    description:
                      "Following an online consultation, our medical team will check that the solution we offer is right for you and write a prescription if appropriate."
                  },
                  {
                    eyebrowText: "Step 3",
                    headlineText: "Delivered discretely for free.",
                    emoji: "📦",
                    description:
                      "Hims will ship your medication for free and automatically refill it every month."
                  }
                ]
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-2",
              props: {
                id: "ed-text-2",
                title: "Erection time",
                body:
                  "40% of men by age 40 struggle from not being able to get and maintain an erection. Clearly having a problem isn’t weird. Not doing anything about it...that’s weird.",
                imageId: "ed-5050-m",
                hasButtonCta: false,
                cardSide: "left",
                overlap: false,
                stacksOnTop: "left"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-3",
              props: {
                id: "ed-text-3",
                title: "Prevention. Much more effective than denial",
                body:
                  "hims has helped over 1 million men get access to the fast and discreet treatment they need. 👋 No doctor's appointments. 👋No waiting rooms. 👋No awkward conversations.",
                imageId: "hims-home-sex-01-hover",
                hasButtonCta: true,
                cardSide: "right",
                overlap: false,
                stacksOnTop: "right",
                taLabel: "Start free consultation",
                ctaText: "Start free consultation",
                ctaUrl: ""
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-4",
              props: {
                id: "ed-text-4",
                title: "★★★★★",
                body:
                  '"Service amazing, doctors are helpful and knowledgeable. products work as they said the would." - Joseph',
                imageId: "hims-home-fullimage-{imageSize}-2x",
                hasButtonCta: false,
                cardSide: "left",
                overlap: false,
                stacksOnTop: "left"
              }
            }
          ]
        }
      },
      {
        componentType: "color-block",
        id: "ed-color-block-3",
        props: {
          backgroundColor: "primary",
          sections: [
            {
              componentType: "soft-footer",
              id: "ed-soft-footer",
              props: {
                text:
                  "Even the world’s greatest actor cannot fake an erection.",
                eyebrowText: "- Mokokoma Mokhonoana",
                image: "hims-pdp-ed-softfooter",
                imageAltText: "",
                bgColor: colors.canvas.islandBlue
              }
            }
          ]
        }
      }
    ]
  }
};
