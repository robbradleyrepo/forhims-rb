import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const hairPdp = {
  componentType: "page",
  id: "hair874hdso8uqkjdsjk",
  theme: "hair",
  props: {
    title: "Male Hair Loss",
    description:
      "Learn about Male Hair Loss and get started with an online consultation to see if treatment is right for you.",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.plpHair
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.plpHair
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "hair-floating-add-to-cart",
        props: {
          label: "Start free consultation for Hair",
          productId: PRODUCT_ID_BY_NAME.finasteride,
          variant: "accent"
        }
      },
      {
        componentType: "hero",
        props: {
          title: "treat hair loss",
          subTitle:
            "Help keep your hair - do something about hair loss while 👏🏽 you 👏🏿 still 👏🏾 have 👏🏼 some 👏 hair.",
          image: "product/hero-plp-hair-slim-{imageSize}",
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
        id: "hair-product-list",
        props: {
          category: "hair"
        }
      },
      {
        componentType: "color-block",
        id: "hair-color-block-1",
        props: {
          backgroundColor: "primaryLight",
          sections: [
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
                    headlineText: "A doctor reviews your order.",
                    emoji: "👨‍⚕️",
                    description:
                      "Within 2-3 working days, a doctor will review your consulation and write a prescription if appropriate."
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
              componentType: "image-block",
              id: "hair-full-width-image-1",
              props: {
                image: "hims-pdp-hair-largeimage-2x",
                title: ""
              }
            },
            {
              componentType: "block",
              id: "after-full-screen-image-block",
              props: { mb: 6 }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "hair-text-3",
              props: {
                id: "hair-text-3",
                title: "What is Pattern Hair Loss?",
                body:
                  "Pattern hair loss is a condition in which hair density thins primarily on the top and front of the scalp. This can also be seen as a receding hairline.",
                imageId: "hims-pdp-hair-blog5050-01",
                ctaText: "LEARN: 4 WAYS TO KNOW IF YOU”RE GOING BALD",
                ctaUrl:
                  "https://www.forhims.co.uk/blog/4-ways-to-know-if-youre-going-bald",
                hasButtonCta: false,
                cardSide: "right",
                overlap: false,
                stacksOnTop: "right"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "hair-blog-1",
              props: {
                id: "hair-blog-1",
                title: "How Hair Loss is Treated",
                body: `Hair loss has a wide range of treatments. These treatments vary from topical solutions, prescription medications, hair transplantation, steroid shots, or laser combs. Get started on treating your hair loss.`,
                imageId: "hims-pdp-hair-blog5050-02",
                ctaText: "Start Free Hair Consultation",
                hasButtonCta: true,
                productId: PRODUCT_ID_BY_NAME.finasteride,
                cardSide: "left",
                overlap: true,
                stacksOnTop: "left"
              }
            }
          ]
        }
      },
      {
        componentType: "soft-footer",
        id: "hair-soft-footer",
        props: {
          text:
            "Shout out to the men who aren't afraid of stepping up and taking care of themselves.",
          image: "hims-pdp-hair-softfooter",
          imageAltText: "cocktail",
          bgColor: colors.canvas.islandBlue
        }
      }
    ]
  }
};
