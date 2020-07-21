// import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const skinPlp = {
  componentType: "page",
  id: "skin874hdso8uqkjdsjk",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "Skin deck",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.plpSkin
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.plpSkin
      }
    ],
    sections: [
      {
        componentType: "hero",
        props: {
          title: "a better way to a better you.",
          subTitle: "Skincare designed to help you look your best.",
          image: "product/hero-plp-skin-slim-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          actionScrollDownLabel: "See available products"
        }
      },
      {
        componentType: "product-list",
        id: "skin-product-list",
        props: {
          category: "skin"
        }
      },
      // {
      //   componentType: "fifty-fifty-callout",
      //   id: "skin-1",
      //   props: {
      //     id: "skin-1",
      //     title: "Ageing can be scary",
      //     body:
      //       "Hollywood ages gracefully for a reason, they use the best products. Let’s help make sure your forehead doesn’t appear permanently stuck in 😕 look.",
      //     imageId: "product/skin/11_Hims_Skin_PLP_AgingCanBeScary_Resized",
      //     hasButtonCta: false,
      //     cardSide: "left",
      //     overlap: true,
      //     stacksOnTop: "left",
      //     ctaLabel:
      //       "LEARN: ESSENTIAL VITAMINS FOR HEALTHY HAIR, SKIN, AND NAILS",
      //     ctaText:
      //       "LEARN: ESSENTIAL VITAMINS FOR HEALTHY HAIR, SKIN, AND NAILS",
      //     ctaUrl:
      //       "https://www.forhims.co.uk/blog/essential-vitamins-for-healthier-hair"
      //   }
      // },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-2",
        props: {
          id: "skin-2",
          title: "When did I become a product guy?",
          body:
            "When you realised it’s rewarding to take care of yourself and use more than just a bar of soap. Vitamin C has been a game changer in the skincare industry for a reason, jump on the bandwagon!",
          imageId:
            "product/skin/everyday/Hims_PDP_EverydayMoisturizer_Image5050_01",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right",
          ctaLabel: "LEARN: THE MOST IMPORTANT VITAMINS FOR MEN",
          ctaText: "LEARN: THE MOST IMPORTANT VITAMINS FOR MEN",
          ctaUrl:
            "https://www.forhims.co.uk/blog/a-guide-to-the-most-important-vitamins-and-minerals-for-men"
        }
      },
      {
        componentType: "center-align-text-with-eyebrow",
        id: "skin-centerText",
        props: {
          id: "skin-plp-page-center-align-text-with-eyebrow-1",
          smallText:
            "No — your bar of soap isn’t enough to maintain your skin’s hydration and glow. Let’s help you keep that money maker looking its best.",
          largeText:
            "No — your bar of soap isn’t enough to maintain your skin’s hydration and glow. Let’s help you keep that money maker looking its best.",
          eyebrowText: "But isn’t a bar of soap good enough?"
        }
      },
      {
        componentType: "image-block",
        id: "hair-full-width-image-1",
        props: {
          image: "hims-howitworks-01-2",
          title: ""
        }
      },
      {
        componentType: "block",
        id: "after-full-screen-image-block",
        props: { mb: 6 }
      },
      {
        componentType: "soft-footer",
        id: "skin-soft-footer",
        props: {
          text:
            "Shout out to the men who aren't afraid of stepping up and taking care of themselves.",
          eyebrowText: "",
          image: "product/skin/12_Hims_Skin_PLP_Footer_Updated2",
          imageAltText: "Figurine holding bottle on shoulders",
          bgColor: colors.canvas.skinBlue
        }
      }
    ]
  }
};
