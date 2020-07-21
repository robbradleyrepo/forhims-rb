import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";

import { colors } from "../../theme/colors";

export const treatmentPageSildenafil = {
  componentType: "page",
  id: "sildenafil-treatment-page",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSexSildenafil
      },
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.pdpSexSildenafil
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "ed-treatment-floating-add-to-cart",
        props: {
          label: "Try today →",
          productId: PRODUCT_ID_BY_NAME.sildenafil,
          variant: "accent"
        }
      },
      {
        componentType: "product-hero",
        id: "ed-product-hero",
        props: {
          backgroundColor: "sex",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.sildenafil,
            productSummaryEyebrow: "Treat Erectile Dysfunction",
            productName: "Sildenafil",
            description: `Sildenafil is a medicine to treat ED. It helps relax blood vessels and improves blood flow to your penis to allow for men to get and keep an erection after sexual stimulation.`,
            secondaryDescriptor: "8 x 50 mg for {{ price }}/month",
            tryNowText: "Try today →",
            warningCaption: "* Subject to pharmacist approval",
            showISI: true
          },
          image: "Hims_PDP_Sildenafil_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "People holding hands"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-text-1",
        props: {
          id: "ed-text-1",
          title: "Good news for men’s health",
          body:
            "Following an assessment of the safety of Sildenafil, the MHRA have decided to reclassify the drug to a pharmacy medication. That means you no longer need a prescription to buy eight 50mg doses of Sildenafil.",
          imageId: "hims-pdp-ed-text5050-01",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "right"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-one",
        props: {
          id: "ed-fifty-copy-one",
          title: "Get Hard",
          body:
            "Sildenafil helps you get hard when the time is right. Take one dose about an hour before sexual activity. You shouldn’t go from 6 to midnight just by taking it. If you do, contact your doctor.",
          imageId: "Hims_PDP_Sildenafil_Image5050_01_hover",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: WHAT TO EXPECT FROM TAKING SILDENAFIL",
          ctaText: "LEARN: WHAT TO EXPECT FROM TAKING SILDENAFIL",
          ctaUrl:
            "https://www.forhims.co.uk/blog/a-complete-guide-viagra-sildenafil-side-effects"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-four",
        props: {
          id: "ed-fifty-copy-four",
          title: "Stay hard",
          body:
            "Sexy time is meant to be sexy. That means keeping that erection strong for as long as it’s needed. Ain't no one have time for bad sexy time.",
          imageId: "hims-pdp-sildenafil-blogpost-02",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel:
            "LEARN: WHAT TO EXPECT FROM ERECTILE DYSFUNCTION MEDICATION",
          ctaText: "LEARN: WHAT TO EXPECT FROM ERECTILE DYSFUNCTION MEDICATION",
          ctaUrl:
            "https://www.forhims.co.uk/blog/what-to-expect-from-erectile-dysfunction-medication"
        }
      },
      {
        componentType: "image-block",
        id: "hair-full-width-image-1",
        props: {
          image: "hair-5050-{imageSize}",
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
          title: "It’s Science",
          body:
            "It works, it’s effective, and we’re now connecting guys directly to what they need.",
          imageId: "hims-pdp-sildenafil-blogpost-03",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "right",
          ctaLabel: "LEARN: ALL ABOUT ED TREATMENTS",
          ctaText: "LEARN: ALL ABOUT ED TREATMENTS",
          ctaUrl:
            "https://www.forhims.co.uk/blog/the-most-common-erectile-dysfunction-treatments-and-drugs"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-four",
        props: {
          id: "ed-fifty-copy-four",
          title: "Stay safe",
          body:
            "Always read the patient information leaflet that comes with your shipment before taking it. It includes important information about how to take it, what to expect, as well as warnings and precautions and possible side effects. For instance, some men experience a tingly feeling in their body, headaches, blurred vision and other side-effects after taking it. Certain things don’t mix with Sildenafil — like nitrites, alcohol in excess, grapefruit and alpha-blockers. And easy partner — you shouldn’t take it more than once daily. Precaution is as important as the fix. If you have an erection that lasts longer than 4 hours, get medical help immediately.",
          imageId: "product/sex/sildenafil/hims-pdp-sildenafil",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left"
        }
      },
      // {
      //   componentType: "fifty-fifty-callout",
      //   id: "skin-fifty-copy-three",
      //   props: {
      //     id: "skin-fifty-copy-three",
      //     title: "Viagra vs Sildenafil",
      //     body:
      //       "Viagra is a brand name medication invented by Pfizer, while sildenafil (or sildenafil citrate) is the active ingredient in Viagra that’s responsible for its positive effects on treating erectile dysfunction.",
      //     imageId: "Hims-PLP-Sex-Viagra-BG.jpg",
      //     hasButtonCta: false,
      //     cardSide: "left",
      //     overlap: true,
      //     stacksOnTop: "left",
      //     ctaLabel: "LEARN: HOW VIAGRA COMPARES TO SILDENAFIL",
      //     ctaText: "LEARN: HOW VIAGRA COMPARES TO SILDENAFIL",
      //     ctaUrl: "https://www.forhims.co.uk/blog/viagra-vs-sildenafil"
      //   }
      // },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-three",
        props: {
          id: "skin-fifty-copy-three",
          title: "Viagra vs Sildenafil",
          body:
            "Viagra is a brand name medication invented by Pfizer, while sildenafil (or sildenafil citrate) is the active ingredient in Viagra that’s responsible for its positive effects on treating erectile dysfunction.",
          imageId: "Hims-PLP-Sex-Viagra-BG.jpg",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW VIAGRA COMPARES TO SILDENAFIL",
          ctaText: "LEARN: HOW VIAGRA COMPARES TO SILDENAFIL",
          ctaUrl: "https://www.forhims.co.uk/blog/viagra-vs-sildenafil"
        }
      },
      {
        componentType: "product-baseball-cards",
        id: "edProductOffering",
        props: {
          id: "ed-baseball-cards",
          imageId: "ed3",
          category: "ed",
          products: [
            {
              id: PRODUCT_ID_BY_NAME.sildenafil,
              title: "Sildenafil",
              description: "8 x 50 mg for {{ price }}/month",
              buttonLabel: "Try today",
              sku: "*FH*Sildenafil*1*20mg",
              meta: null,
              is_bundle: false,
              requires_subscription: true,
              requires_consultation: true,
              bundle_id: null,
              tags: ["sex"],
              prescriptions: ["ED"],
              tax_code: "PH050102",
              bundle_ids: null,
              contents: null,
              status: "active"
            }
          ]
        }
      },
      {
        componentType: "soft-footer",
        id: "edFooter",
        props: {
          id: "ed-footer",
          bgColor: colors.canvas.frostGray,
          image: "hims-softfooter-01.jpg",
          imageAltText: "martiniGlass",
          eyebrowText: "- Mokokoma Mokhonoana",
          text: `Even the world’s greatest actor cannot fake an erection.`
        }
      }
    ]
  }
};
