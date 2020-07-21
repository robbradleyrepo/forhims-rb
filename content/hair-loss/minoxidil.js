import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";

export const pdpHairPowerPack = {
  componentType: "page",
  id: "Minoxidil-treatment-page",
  theme: "hair",
  props: {
    title: "Male Hair Loss",
    description:
      "Learn about Male Hair Loss and get started with an online consultation to see if treatment is right for you.",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpHairPowerPack
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "hair-floating-add-to-cart",
        props: {
          label: "Start free consultation for Hair",
          productId: PRODUCT_ID_BY_NAME.hairPowerPack,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "hair-product-hero",
        props: {
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.hairPowerPack,
            productSummaryEyebrow: "The Drops",
            productName: "Minoxidil+",
            description:
              "This topical solution, used once or twice a day, can put a stop to hair loss and may even help new hair growth. Hair today, hair tomorrow. Plenty of hair for grabbing, twirling and such.",
            buttonVariant: "ButtonLink",
            buttonLabel: "See Available Treatments",
            buttonTo: "/hair-loss/finasteride",
            warningCaption: ""
          },
          image:
            "product/hair/minoxidil/Hims_PDP_Minoxidil_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Minoxidil+"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-one",
        props: {
          id: "hair-fifty-copy-one",
          title: "Just a drop",
          body:
            "Drop on the affected area and let it dry for 2-4 hours. Try to keep your hair away from your pillow when wet.",
          imageId: "product/hair/minoxidil/Hims_PDP_Minoxidil_Text6040_01.jpg",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW FAST DOES MINOXIDIL WORK",
          ctaText: "LEARN: HOW FAST DOES MINOXIDIL WORK",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-long-before-minoxidil-starts-working"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-two",
        props: {
          id: "hair-fifty-copy-two",
          title: "What is Minoxodil?",
          body:
            "Minoxidil is a topical product that's been approved by the FDA to treat hair loss and help regrow hair.",
          imageId: "product/hair/minoxidil/Hims_PDP_Minoxidil_Image5050_01.jpg",
          hasButtonCta: true,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: ABOUT MALE PATTERN BALDNESS AND HAIR LOSS",
          ctaText: "LEARN: ABOUT MALE PATTERN BALDNESS AND HAIR LOSS",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-long-before-minoxidil-starts-working"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-three",
        props: {
          id: "hair-fifty-copy-three",
          title: "A thicker crown",
          body:
            "Minoxidil actively promotes hair growth by shedding old hairs and replacing them with new ones.",
          imageId:
            "product/mouth/acyclovir/Hims_PDP_Herpes_Product02-{imageSize}",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW DOES MINOXIDIL WORK",
          ctaText: "LEARN: HOW DOES MINOXIDIL WORK",
          ctaUrl:
            "https://www.forhims.co.uk/blog/minoxidil-vs-finasteride-do-either-really-work    "
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-four",
        props: {
          id: "hair-fifty-copy-four",
          title: "Backed by science",
          body:
            "Minoxidil relaxes blood vessels, making it easier for blood to flow to your scalp and hair follicles.",
          imageId: "product/hair/minoxidil/Hims_PDP_Minoxidil_Image5050_02.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HAIR GROWTH PRODUCTS THAT WORK",
          ctaText: "LEARN: HAIR GROWTH PRODUCTS THAT WORK",
          ctaUrl:
            "https://www.forhims.co.uk/blog/hair-growth-products-are-they-effective"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-five",
        props: {
          id: "hair-fifty-copy-five",
          title: "Play the long game",
          body:
            "You may lose hair at first. This is temporary as your old hair is replaced by new, thicker hair.",
          imageId: "product/hair/minoxidil/Hims_PDP_Minoxidil_Image5050_03.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "VIEW OUR RELATED ARTICLES",
          ctaText: "VIEW OUR RELATED ARTICLES",
          ctaUrl: "https://www.forhims.com/blog"
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
          bgColor: "islandBlue"
        }
      }
    ]
  }
};
