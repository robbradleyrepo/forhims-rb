import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpWellnessPropranolol = {
  componentType: "page",
  id: "Everyday-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpWellnessPropranolol
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "Everyday-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.propranolol,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "wellbeing-product-hero",
        props: {
          backgroundColor: "skin",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.propranolol,
            productSummaryEyebrow: "Performance Anxiety Aid",
            productName: "Propranolol for Anxiety",
            description: `Perhaps you have some important meetings coming up, a speaking engagement, or an interview – Propranolol is a drug sometimes prescribed by doctors to help control the physical symptoms of performance anxiety.`,
            secondaryDescriptor: "",
            tryNowText: "Start my free consultation →",
            warningCaption: "",
            showISI: true,
            showForm: true,
            offerDescriptor: "",
            offerCTA: "Join Waitlist"
          },
          image:
            "product/wellbeing/propranolol/Hims_PDP_Propanolol_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Propranolol for Anxiety"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "wellness-fifty-copy-one",
        props: {
          id: "wellness-fifty-copy-one",
          title: "How it works",
          body:
            "Propranolol is a beta-blocker that can help control the physical symptoms of anxiety. Taken before a stressful event, Propranolol can help ease the performance anxiety during your big event – like a big presentation at work or interview.",
          imageId:
            "product/wellbeing/propranolol/Hims_PDP_Propanolol_Text6040_01.jpg",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: PROPRANOLOL INFORMATION AND FAQS",
          ctaText: "LEARN: PROPRANOLOL INFORMATION AND FAQS",
          ctaUrl: "https://www.forhims.com/blog/how-propranolol-works"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "wellness-fifty-copy-two",
        props: {
          id: "wellness-fifty-copy-two",
          title: "Beta-Blocker?",
          body:
            "Beta-blockers prevent adrenaline, from making contact with your beta receptors, limiting your body’s physical reactions to anxiety. These reactions can include a racing heartbeat, shaky voice or hands, or sweating. By reducing some of these physical reactions, Propranolol can help you feel less anxious.",
          imageId: "hims-pdp-ed-largeimage-2x.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right",
          ctaLabel: "LEARN: WHAT BETA BLOCKERS ARE AND WHAT THEY DO",
          ctaText: "LEARN: WHAT BETA BLOCKERS ARE AND WHAT THEY DO",
          ctaUrl: "https://www.forhims.com/blog/beta-blockers"
        }
      },
      {
        componentType: "image-block",
        id: "hair-full-width-image-1",
        props: {
          image:
            "product/wellbeing/propranolol/Hims_PDP_Propanolol_ImageLarge_01.jpg",
          title: ""
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "wellness-fifty-copy-three",
        props: {
          id: "wellness-fifty-copy-three",
          title: "Is this for me?",
          body:
            "Propranolol can help some people who struggle from performance anxiety during particularly stressful situations. This can include having to speak in front of an audience, an audition, or an interview. Talk with your doctor about whether Propranolol is right for you.",
          imageId:
            "product/wellbeing/propranolol/Hims_PDP_Propanolol_Text6040_02",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW TO MANAGE PERFORMANCE ANXIETY",
          ctaText: "LEARN: HOW TO MANAGE PERFORMANCE ANXIETY",
          ctaUrl: "https://www.forhims.com/blog/propranolol-performance-anxiety"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "wellness-fifty-copy-four",
        props: {
          id: "wellness-fifty-copy-four",
          title: "What you get",
          body:
            "If your doctor prescribes Propranolol, Hims sends the dose approved by your doctor. It is typically taken on an as-needed basis in a single dose 30-60 minutes prior to the stressful event, but make sure to follow your doctor’s instructions on dosage and timing.",
          imageId: "hims-home-mission-03.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "wellness-fifty-copy-five",
        props: {
          id: "wellness-fifty-copy-five",
          title: "Stay Safe",
          body:
            "Consult your doctor about any medications, supplements, or vitamins you may take in case of drug interactions. Additionally, make sure to read all of the important safety information and use our platform to consult with a doctor if you are experiencing side-effects so they can recommend adjustments to your treatment plan.",
          imageId: "Hims_PDP_PEJ_Image5050_03.jpg",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "soft-footer",
        id: "ed-soft-footer",
        props: {
          text:
            "What’s “wellness” you ask? It is all those little things that contribute to you being, well, well. Let’s keep you chugging along.",
          image: "Hims_PLP_Skin_SoftFooter",
          imageAltText: "Cocktail",
          bgColor: colors.canvas.skinBlue
        }
      }
    ]
  }
};
