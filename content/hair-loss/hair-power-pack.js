import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpHairPowerPack = {
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
            productSummaryEyebrow: "Dynamic Duo",
            productName: "Hair Power Pack",
            description:
              "A power couple like you’ve never seen before. Finasteride treats male pattern baldness, at the crown and in the middle of the scalp. You’ll see thicker hair and slower hair loss with regular use. Regaine® is a foam hair loss treatment that should be used twice a day. It can put a stop to hair loss and may even help new hair growth.",
            secondaryDescriptor:
              "<p><b>1. Finasteride.</b> <span>28 x 1 mg pills</span> <i>*Prescription products require an online consultation with a doctor who will determine if a prescription is appropriate</i></p><p><b>2. Regaine®.</b> <span>73ml bottle</span><i>*Subject to pharmacist approval</i>",
            tryNowText: "Start my free consultation →",
            warningCaption: "",
            showISI: true,
            showForm: true,
            offerDescriptor: "Grab a FREE shampoo worth £10",
            offerCaption:
              "Offer is subject to availability and may be changed at any time.",
            offerCTA: "Grab a FREE shampoo"
          },
          image: "product/hair/power-pack/hair-powerpack-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Hair Power Pack"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hair-fifty-copy-one",
        props: {
          id: "hair-fifty-copy-one",
          title: "Finasteride Pills",
          body:
            "Finasteride has been shown to increases the volume and health of hair in men with mild to moderate hair loss after about 3 to 6 months of consistent use. It works by preventings testosterone from breaking down into DHT, a hormone that is thought to contribute to hair loss in men.",
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
          title: "Regaine® foam ",
          body:
            "Regaine® is a scientifically proven topical hair loss treatment that is designed to help stop and reverse signs of hereditary hair loss by working at the roots of your hair.  After 16 weeks 9 / 10 men reported that they kept or regrew their hair.",
          imageId: "product/hair/Hims_PDP_Kit1_Image5050_02.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: 4 WAYS TO KNOW IF YOU'RE GOING BALD",
          ctaText: "LEARN: 4 WAYS TO KNOW IF YOU'RE GOING BALD",
          ctaUrl:
            "https://www.forhims.co.uk/blog/4-ways-to-know-if-youre-going-bald"
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
            "Regaine® increases blood to flow to your scalp and hair follicles. Finasteride stops testosterone from converting into DHT, the androgen that is thought to contribute to hair loss in men.",
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
          stacksOnTop: "left",
          ctaLabel:
            "LEARN: FINASTERIDE SIDE EFFECTS: WHAT ARE THEY AND ARE THEY COMMON?",
          ctaText:
            "LEARN: FINASTERIDE SIDE EFFECTS: WHAT ARE THEY AND ARE THEY COMMON?",
          ctaUrl:
            "https://www.forhims.co.uk/blog/finasteride-side-effects-what-you-can-expect"
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
