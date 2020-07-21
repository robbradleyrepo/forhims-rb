import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const tadalafil = {
  componentType: "page",
  id: "Tadalafil-pdp-page",
  theme: "sex",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSexTadalafil
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "tadalafil-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.tadalafil,
          variant: "accent",
          showForm: false
        }
      },
      {
        componentType: "product-hero",
        id: "tadalafil-product-hero",
        props: {
          backgroundColor: "sex",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.tadalafil,
            productSummaryEyebrow: "Treat Erectile Dysfunction",
            productName: "Tadalafil",
            description: `If you are suffering from ED, you are probably looking for treatment that is both affordable and convenient. Through hims, you can get a free online consultation with a doctor to help treat ED. Doctors can prescribe medicines like Tadalafil for men with ED to help you get hard when the time is right.`,
            // secondaryDescriptor: "8 x 10 mg for {{ price }}/month",
            secondaryDescriptor: "",
            tryNowText: "start my free consultation →",
            warningCaption:
              "* Prescription products require an online consultation with a doctor who will determine if a prescription is appropriate. * Risks of this medication can include nausea, dizziness, chest or arm pain and in rare cases, changes in vision or loss of sight. Seek emergency care right away if you have an erection that lasts longer than 4 hours or becomes painful. Do not drink alcohol to excess (e.g. 5 drinks) when taking this medicine.",
            showISI: true,
            showForm: false
          },
          image: "Hims_PDP_Sildenafil_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Tadalafil (Generic Cialis®)"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-one",
        props: {
          id: "ed-fifty-copy-one",
          title: "What is it?",
          body:
            "Tadalafil is a medicine that can helps men with ED get and keep erections, improving sexual function and the ability to have a successful sexual encounter",
          imageId: "Hims_PDP_Sildenafil_Image5050_01_hover",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: WHAT ARE THE SIDE EFFECTS OF TADALAFIL?",
          ctaText: "LEARN: WHAT ARE THE SIDE EFFECTS OF TADALAFIL?",
          ctaUrl:
            "https://www.forhims.co.uk/blog/a-complete-guide-cialis-tadalafil-side-effects"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-two",
        props: {
          id: "ed-fifty-copy-two",
          title: "How It Works",
          body:
            "If your doctor prescribes Tadalafil, it will help relax certain blood vessels to improve blood flow to some important parts of your body… like your penis.",
          imageId: "hims-pdp-sildenafil-blogpost-03",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right",
          ctaLabel: "LEARN: WHAT TO EXPECT FROM ED MEDICATION",
          ctaText: "LEARN: WHAT TO EXPECT FROM ED MEDICATION",
          ctaUrl:
            "https://www.forhims.co.uk/blog/what-to-expect-from-erectile-dysfunction-medication"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-three",
        props: {
          id: "ed-fifty-copy-three",
          title: "How to take",
          body:
            "Read the patient information leaflet that comes with your delivery before you start taking the medicine. It contains important information about how to take it and what to expect, as well as important safety information, including warnings and precautions and possible side effects. Always take Tadalafil as directed by your doctor.",
          imageId: "HIMS_SEX_Geroge_004",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: TIPS FOR TAKING ED MEDICATION EFFECTIVELY",
          ctaText: "LEARN: TIPS FOR TAKING ED MEDICATION EFFECTIVELY",
          ctaUrl:
            "https://www.forhims.co.uk/blog/5-tips-for-taking-ed-medication-effectively"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-four",
        props: {
          id: "ed-fifty-copy-four",
          title: "How Long Does Tadalafil Last",
          body:
            "Tadalafil takes between 30 and 60 minutes to start working. Tadalafil has a half-life of 17.5 hours and remains active in the body as an effective erectile dysfunction treatment for up to 36 hours after it’s consumed.",
          imageId: "hims-pdp-sildenafil-blogpost-02",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: THE DIFFERENT ED MEDICATIONS",
          ctaText: "LEARN: THE DIFFERENT ED MEDICATIONS",
          ctaUrl:
            "https://www.forhims.co.uk/blog/what-to-expect-from-erectile-dysfunction-medication"
        }
      },
      {
        componentType: "soft-footer",
        id: "ed-soft-footer",
        props: {
          text: "Even the world’s greatest actor cannot fake an erection.",
          eyebrowText: "- Mokokoma Mokhonoana",
          image: "hims-softfooter-01.jpg",
          imageAltText: "Martini Glass",
          bgColor: colors.canvas.frostGray
        }
      }
    ]
  }
};
