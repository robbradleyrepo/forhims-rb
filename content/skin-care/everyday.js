import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpSkinEveryday = {
  componentType: "page",
  id: "Everyday-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSkinEveryday
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "Everyday-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.everyday,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "Everyday-product-hero",
        props: {
          backgroundColor: "skin",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.everyday,
            productSummaryEyebrow: "The Elements Shield",
            productName: "Everyday Moisturiser",
            description: `A daily moisturiser that you won’t want to give up on, because it won’t give up on you. This light moisturiser helps keep your skin from looking overly shiny or oily.`,
            secondaryDescriptor: "",
            tryNowText: "Start my free consultation →",
            warningCaption: "",
            showISI: false,
            showForm: true,
            offerDescriptor: "Grab £5 off",
            offerCaption:
              "£5 off offer is subject to availability and may be changed at any time.",
            offerCTA: "Give me £5 off!"
          },
          image:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Everyday Moisturiser"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-one",
        props: {
          id: "skin-fifty-copy-one",
          title: "I'm new to this",
          body:
            "Many men do not know where to turn when it comes to finding a simple, yet powerful, moisturiser. That’s why we deliver you one with some of science’s key ingredients.",
          imageId:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_Text6040_01",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW TO GET HEALTHIER SKIN IN LESS TIME",
          ctaText: "LEARN: HOW TO GET HEALTHIER SKIN IN LESS TIME",
          ctaUrl:
            "https://www.forhims.co.uk/blog/mens-skin-care-regimen-for-guys-in-a-hurry"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-two",
        props: {
          id: "skin-fifty-copy-two",
          title: "Use every morning",
          body:
            "Your moisturising solution after a morning shower or shave. This light cream helps lock in moisture to help you feel comfortable in your skin all day.",
          imageId:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_Image5050_01",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right",
          ctaLabel: "LEARN: HOW TO PROTECT YOUR SKIN AT ANY AGE",
          ctaText: "LEARN: HOW TO PROTECT YOUR SKIN AT ANY AGE",
          ctaUrl:
            "https://www.forhims.co.uk/blog/skin-care-for-men-in-their-20s-30s-and-40s"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-three",
        props: {
          id: "skin-fifty-copy-three",
          title: "How does it work?",
          body:
            "Formulated with hyaluronic acid, a natural agent that holds more than 1000 x its weight in water.",
          imageId:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_Image5050_02",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: AN EXPERT SKIN CARE ROUTINE",
          ctaText: "LEARN: AN EXPERT SKIN CARE ROUTINE",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-to-expertly-build-a-mens-skin-care-routine"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-four",
        props: {
          id: "skin-fifty-copy-four",
          title: "How does it moisturise?",
          body:
            "Shea butter! When used on skin, can help you get that au naturel glow.",
          imageId:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_Text6040_02",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right",
          ctaLabel: "LEARN: HOW TO LOOK AFTER SUN DAMAGED SKIN",
          ctaText: "LEARN: HOW TO LOOK AFTER SUN DAMAGED SKIN",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-to-repair-sun-damaged-skin"
        }
      },
      {
        componentType: "soft-footer",
        id: "ed-soft-footer",
        props: {
          text:
            "A little care goes a long way. Keep your skin looking good with this light moisturiser.",
          image:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_SoftFooter",
          imageAltText: "Figurine",
          bgColor: colors.canvas.peachOrange
        }
      }
    ]
  }
};
