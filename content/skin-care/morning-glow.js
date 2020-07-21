import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpSkinMorningGlow = {
  componentType: "page",
  id: "glow-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSkinMorningGlow
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "Glow-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.morningglow,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "Glow-product-hero",
        props: {
          backgroundColor: "skin",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.morningglow,
            productSummaryEyebrow: "The Fruit Peddler",
            productName: "Morning Glow Vitamin C Serum",
            description: `Vitamin C can be an important antioxidant when applied topically, giving you a glow and helping you look as though you have your shit together.`,
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
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Morning Glow Vitamin C Serum"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-one",
        props: {
          id: "skin-fifty-copy-one",
          title: "Use after cleansing",
          body:
            "Use this serum every morning after cleansing and before your moisturiser or sunscreen.",
          imageId:
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_Text6040_01",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: VITAMIN C AND SKIN HEALTH",
          ctaText: "LEARN: VITAMIN C AND SKIN HEALTH",
          ctaUrl:
            "https://www.forhims.co.uk/blog/should-you-use-a-vitamin-c-serum"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-two",
        props: {
          id: "skin-fifty-copy-two",
          title: "When did I become a product guy?",
          body:
            "When you realized it’s rewarding to take care of yourself and use more than just a bar of soap. Vitamin C has been a game changer in the skincare industry for a reason, jump on the bandwagon!",
          imageId:
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_Image5050_01",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right",
          ctaLabel: "LEARN: SKIN CARE FOR BUSY GUYS",
          ctaText: "LEARN: SKIN CARE FOR BUSY GUYS",
          ctaUrl:
            "https://www.forhims.co.uk/blog/mens-skin-care-regimen-for-guys-in-a-hurry"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-three",
        props: {
          id: "skin-fifty-copy-three",
          title: "Why a serum?",
          body:
            "Serums typically have a higher concentration of key ingredients, like Vitamin C in this case! We wanted to make a powerhouse to help you see the most noticeable results.",
          imageId:
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_Image5050_02",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW TO BUILD A SKIN CARE ROUTINE",
          ctaText: "LEARN: HOW TO BUILD A SKIN CARE ROUTINE",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-to-expertly-build-a-mens-skin-care-routine"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-four",
        props: {
          id: "skin-fifty-copy-four",
          title: "Clearer and Brighter",
          body:
            "Vitamin C can help to reduce the appearance of skin discolouration, helping you achieve a more clear and even-looking skin complexion.",
          imageId:
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_Text6040_02",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right",
          ctaLabel: "LEARN: HOW TO BUILD A SKIN CARE ROUTINE",
          ctaText: "LEARN: HOW TO BUILD A SKIN CARE ROUTINE",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-to-expertly-build-a-mens-skin-care-routine"
        }
      },
      {
        componentType: "soft-footer",
        id: "skin-soft-footer",
        props: {
          text:
            "Though it often gets hyped, we’ll allow it in our morning routine in this case.",
          image:
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_SoftFooter",
          imageAltText: "Bottle",
          bgColor: colors.canvas.vistaWhite
        }
      }
    ]
  }
};
