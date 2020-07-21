import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpSkinWrinkle = {
  componentType: "page",
  id: "wrinkle-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSkinWrinkle
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "wrinkle-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.wrinkle,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "wrinkle-product-hero",
        props: {
          backgroundColor: "skin",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.wrinkle,
            productSummaryEyebrow: "Logging Overtime",
            productName: "Goodnight Wrinkle Cream",
            description: `You’ve already had a long day -– give yourself a break with this luxurious cream formulated with well-known ingredients that work for you whilst you slumber.`,
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
            "product/skin/wrinkle/Hims_PDP_GoodnightWrinkleCream_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Goodnight Wrinkle Cream"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-one",
        props: {
          id: "skin-fifty-copy-one",
          title: "Use every evening",
          body:
            "After cleansing and applying other skincare treatments, apply a thin layer of this evening cream before knocking out for the night.",
          imageId:
            "product/skin/wrinkle/Hims_PDP_GoodnightWrinkleCream_Text6040_01",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW TO BUILD A SKIN CARE ROUTINE",
          ctaText: "LEARN: HOW TO BUILD A SKIN CARE ROUTINE",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-to-expertly-build-a-mens-skin-care-routine"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-two",
        props: {
          id: "skin-fifty-copy-two",
          title: "How is this different?",
          body:
            "This is a thick, moisturizing cream meant to be used at night.",
          imageId:
            "product/skin/wrinkle/Hims_PDP_GoodnightWrinkleCream_Image5050_01",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right",
          ctaLabel: "LEARN: HOW TO KEEP YOUR SKIN LOOKING YOUNG",
          ctaText: "LEARN: HOW TO KEEP YOUR SKIN LOOKING YOUNG",
          ctaUrl:
            "https://www.forhims.co.uk/blog/mens-skin-care-regimen-for-guys-in-a-hurry"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-three",
        props: {
          id: "skin-fifty-copy-three",
          title: "What's the science?",
          body:
            "Caffeine and hyaluronic acid – our heavy hitters in this cream.",
          imageId:
            "product/skin/morning-glow/Hims_PDP_MorningGlowSerum_Image5050_02",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: SKIN CARE FOR MEN AT ANY AGE",
          ctaText: "LEARN: SKIN CARE FOR MEN AT ANY AGE",
          ctaUrl:
            "https://www.forhims.co.uk/blog/skin-care-for-men-in-their-20s-30s-and-40s"
        }
      },
      // {
      //   componentType: "fifty-fifty-callout",
      //   id: "skin-fifty-copy-four",
      //   props: {
      //     id: "skin-fifty-copy-four",
      //     title: "Can I use with hims’ other skincare kits?",
      //     body:
      //       "Yes, this cream was made to be that thick moisturiser used after your prescription tretinoin treatments.",
      //     imageId:
      //       "product/skin/wrinkle/Hims_PDP_GoodnightWrinkleCream_Text6040_02",
      //     hasButtonCta: false,
      //     cardSide: "right",
      //     overlap: false,
      //     stacksOnTop: "right",
      //     ctaLabel: "LEARN: USING MOISTURIZERS WITH TRETINOIN",
      //     ctaText: "LEARN: USING MOISTURIZERS WITH TRETINOIN",
      //     ctaUrl:
      //       "https://www.forhims.co.uk/blog/can-you-use-tretinoin-with-moisturizer"
      //   }
      // },
      {
        componentType: "soft-footer",
        id: "skin-soft-footer",
        props: {
          text:
            "Missing your alarm these days? Roll out of bed ready to go with this cream. Who said multitasking wasn’t possible?",
          image:
            "product/skin/wrinkle/Hims_PDP_GoodnightWrinkleCream_SoftFooter",
          imageAltText: "Cream tub with figurines sitting on top",
          bgColor: colors.canvas.newBlue
        }
      }
    ]
  }
};
