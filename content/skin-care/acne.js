import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpSkinAcne = {
  componentType: "page",
  id: "glow-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSkinAcne
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "Glow-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.acne,
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
            productId: PRODUCT_ID_BY_NAME.acne,
            productSummaryEyebrow: "So Fresh and So Clear",
            productName: "Acne Cream",
            description: `Acne at any age is a downer. But with this simple step in your skincare routine—consisting of prescription-strength retinoids and antibiotics that help control acne-causing bacteria—you can get your face back under control. Our physicians will help you choose the right strength and frequency for you. Soon enough, you’ll be in the clear.`,
            secondaryDescriptor: "",
            tryNowText: "Start my free consultation →",
            warningCaption: "",
            showISI: true,
            showForm: true,
            offerDescriptor: "Grab £5 off",
            offerCaption:
              "£5 off offer is subject to availability and may be changed at any time.",
            offerCTA: "Give me £5 off!"
          },
          image:
            "product/skin/anti-aging/Hims_PDP_AntiAging_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Acne Cream"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-one",
        props: {
          id: "skin-fifty-copy-one",
          title: "fighting acne at its root",
          body:
            "Formulated with clindamycin, niacinamide and tretinoin, this topical solution is custom formulated for you to help stop acne-causing bacteria from reproducing. It will also help to decrease inflammation associated with acne and increase cellular turnover in your skin—leaving your skin looking and feeling healthy and renewed.",
          imageId: "product/skin/acne/02_Hims_Skin_PDP_Acne_fighting",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: TRETINOIN CREAM TO TREAT ACNE",
          ctaText: "LEARN: TRETINOIN CREAM TO TREAT ACNE",
          ctaUrl: ""
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-two",
        props: {
          id: "skin-fifty-copy-two",
          title: "Can i get this over the counter?",
          body:
            "Because these topical medications are prescribed to you after an online consultation with a doctor through our platform—and personally formulated for your needs—these are not available over the counter. However, the process with hims is much easier than getting a typical in-person dermatologist referral. With us, you can get a prescription entirely through your phone—and for a fraction of the price. A dream process for your dream face. 😏",
          imageId: "product/skin/acne/03_Hims_Skin_PDP_Acne_OTC",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left"
        }
      },

      {
        componentType: "image-block",
        id: "hair-full-width-image-1",
        props: {
          image: "product/skin/acne/04_Hims_Skin_PDP_Acne",
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
        id: "skin-fifty-copy-three",
        props: {
          id: "skin-fifty-copy-three",
          title: "how to use?",
          body:
            "Use this product as instructed by the doctor. A pump or two usually does the trick. Your doctor may recommend you start slow - such as every third night - then ramp up to nightly after your skin adjusts. If you experience any side effects, you can connect with a doctor through our platform. 👏 👋 Later, acne.",
          imageId: "product/skin/acne/05_Hims_Skin_PDP_Acne_HowtoUse_new",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-four",
        props: {
          id: "skin-fifty-copy-four",
          title: "what should I expect when I first start using these?",
          body:
            "Because this treatment promotes cell turnover (shedding that old skin), it's normal to see some dry, red or flaky spots in the beginning. To help with the dry spots, you can use a moisturizer—but be sure it's free of alcohol, benzoyl peroxide, salicylic acid and other exfoliators to avoid extra irritation. Connect with a doctor through our platform if you are concerned about any reaction you're experiencing.",
          imageId: "product/skin/acne/06_Hims_Skin_Main_Acne_WhattoExpect",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right"
        }
      },
      {
        componentType: "soft-footer",
        id: "hair-soft-footer",
        props: {
          eyebrowText: "What do I need?",
          text:
            "the solution is real and it’s staring you in the face. Check out our prescription products today and see which ones are right for you!",
          image: "Hims_PLP_Skin_SoftFooter",
          imageAltText: "cocktail",
          bgColor: colors.canvas.skinBlue
        }
      }
    ]
  }
};
