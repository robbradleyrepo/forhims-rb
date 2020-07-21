import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpHairCompleteKit = {
  componentType: "page",
  id: "HairPowerPack-treatment-page",
  theme: "hair",
  props: {
    title: "Male Hair Loss",
    description:
      "Learn about Male Hair Loss and get started with an online consultation to see if treatment is right for you.",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpHairCompleteKit
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "hair-floating-add-to-cart",
        props: {
          label: "Start free consultation for Hair",
          productId: PRODUCT_ID_BY_NAME.completeHairKit,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "hair-product-hero",
        props: {
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.completeHairKit,
            productSummaryEyebrow: "The Complete Package",
            productName: "Complete Hair Kit",
            description:
              "The comprehensive answer to questions like 'is it me or is my hair thinning?'",
            secondaryDescriptor:
              "<p><b>1. Finasteride.</b> <span>28 x 1 mg pills</span><i>*Subject to pharmacist approval</i></p><p><b>2. Regaine®.</b> <span>73ml bottle</span></p><p><b>3. The Shampoo.</b> <span>180ml bottle</span></p>",
            tryNowText: "Start my free consultation →",
            warningCaption: "",
            showISI: true,
            showForm: true,
            offerDescriptor: "Grab a FREE shampoo worth £10",
            offerCaption:
              "Offer is subject to availability and may be changed at any time.",
            offerCTA: "Grab a FREE shampoo"
          },
          image: "product/hair/complete-pack/hair-completepack-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Complete Hair Kit"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-one",
        props: {
          id: "hair-fifty-copy-one",
          title: "Finasteride Pills",
          body:
            "Finasteride has been shown to increase the volume and health of hair in men with mild to moderate hair loss after about 3 to 6 months of consistent use. It works by preventing testosterone from breaking down into DHT, a hormone that is thought to contribute to hair loss in men.",
          imageId: "product/hair/Hims_PDP_Kit1_Image5050_01.jpg",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: IS FINASTERIDE THE RIGHT HAIR LOSS REMEDY FOR YOU?",
          ctaText: "LEARN: IS FINASTERIDE THE RIGHT HAIR LOSS REMEDY FOR YOU?",
          ctaUrl:
            "https://www.forhims.co.uk/blog/is-finasteride-the-right-hair-loss-remedy-for-you"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-two",
        props: {
          id: "hair-fifty-copy-two",
          title: "Regaine® foam",
          body:
            "Regaine® is the first and only scientifically proven foam hair loss treatment to help stop and even reverse hereditary hair loss, working deep down at the root. 9/10 men said they kept or regrew hair after 16 weeks use.",
          imageId: "product/hair/Hims_PDP_Kit1_Image5050_02.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel:
            "LEARN: EVERYTHING YOU NEED TO KNOW ABOUT DHT BLOCKING SHAMPOOS",
          ctaText:
            "LEARN: EVERYTHING YOU NEED TO KNOW ABOUT DHT BLOCKING SHAMPOOS",
          ctaUrl:
            "https://www.forhims.co.uk/blog/dht-blocking-shampoos-everything-you-need-to-know"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-three",
        props: {
          id: "hair-fifty-copy-three",
          title: "The Shampoo",
          body:
            "This shampoo features saw palmetto and promotes volume and moisture.",
          imageId: "product/hair/Hims_PDP_Kit1_Image5050_03.jpg",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false
        }
      },
      {
        componentType: "image-block",
        id: "hair-full-width-image-1",
        props: {
          image: "Hims_PDP_Finasteride_ImageLarge_01",
          title: ""
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-four",
        props: {
          id: "hair-fifty-copy-four",
          title: "Backed by science",
          body:
            "Regaine® increases blood to flow to your scalp and stimulates hair follicles. Finasteride stops testosterone from converting into DHT, the androgen that is thought to contribute to hair loss in men. The Shampoo+ is packed with saw palmetto and can help your hair appear thicker and healthier.",
          imageId: "Hims_PDP_Minoxidil_Text6040_02b",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-five",
        props: {
          id: "hair-fifty-copy-five",
          title: "safety first",
          body:
            "Side effects may occur with any prescription medicine. Some men may experience a reaction to Finasteride. Talk to your doctor if you experience any side effects while taking it.",
          imageId: "Hims_PDP_Sildenafil_Image5050_01_hover.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "soft-footer",
        id: "hair-soft-footer",
        props: {
          text:
            "What's a nice head of hair if it's not enough to run hands through? C'mon now...",
          image: "Hims_PLP_Skin_SoftFooter",
          imageAltText: "cocktail",
          bgColor: colors.canvas.skinBlue
        }
      }
    ]
  }
};
