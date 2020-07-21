import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const viagraconnect = {
  componentType: "page",
  id: "viagra-pdp-page",
  theme: "sex",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSexViagra
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "viagra-treatment-floating-add-to-cart",
        props: {
          label: "Try today →",
          productId: PRODUCT_ID_BY_NAME.viagra,
          variant: "accent",
          showForm: false
        }
      },
      {
        componentType: "product-hero",
        id: "viagra-product-hero",
        props: {
          backgroundColor: "sex",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.viagra,
            productSummaryEyebrow: "Buy the Original",
            productName: "Viagra Connect®",
            description: `There’s at least one incredible thing that came out of the 90s…Viagra. Treat ED with the help of this little rocket ship, now available without prescription as Viagra Connect®.`,
            secondaryDescriptor: "8 x 50 mg for {{ price }}/month",
            tryNowText: "Try today →",
            warningCaption: "*  Subject to pharmacist approval",
            showISI: true,
            showForm: false
          },
          image: "product/sex/viagra/Hims_PDP_Viagra-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Viagra Connect®"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-one",
        props: {
          id: "ed-fifty-copy-one",
          title: "What is Viagra Connect®?",
          body:
            "Viagra Connect® allows you to get an erection, worry-free, when the time is right. Now available without prescription, Viagra Connect® enables men to get what they need without the hassle of a doctor’s appointment or an uncomfortable conversation. Viagra has been prescribed by doctors for the last 20 years and since then has been helping men suffering from ED feel confident and comfortable in the bedroom.",
          imageId: "Hims_PDP_Sildenafil_Image5050_01_hover",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left"
          // ctaLabel: "LEARN: HOW DOES VIAGRA WORK?",
          // ctaText: "LEARN: HOW DOES VIAGRA WORK?",
          // ctaUrl: "https://www.forhims.co.uk/blog/how-does-viagra-work"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-two",
        props: {
          id: "ed-fifty-copy-two",
          title: "How It Works",
          body:
            "Viagra helps relax certain blood vessels to improve blood flow to some important parts of your body… like your penis.",
          imageId: "hims-pdp-sildenafil-blogpost-03",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right"
          // ctaLabel: "LEARN: 22 COMMON QUESTIONS ABOUT VIAGRA ANSWERED",
          // ctaText: "LEARN: 22 COMMON QUESTIONS ABOUT VIAGRA ANSWERED",
          // ctaUrl:
          //   "https://www.forhims.co.uk/blog/viagra-faqs-22-questions-viagra-answered"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-three",
        props: {
          id: "ed-fifty-copy-three",
          title: "How to use",
          body:
            "Always take Viagra Connect® as instructed by the usage guide and patient leaflet information. Typically you’ll take it about 30-60 minutes before you plan to have sex 🚀. Viagra Connect® can help you get hard if you are sexually excited so you will not get an erection just by taking the pill. If you take Viagra Connect® after a high-fat meal (such as a cheeseburger and chips ), the medicine may take a little longer to start working.",
          imageId: "product/sex/viagra/Hims_PDP_Viagra_01",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW TO GET THE BEST RESULTS FROM ED MEDICATION",
          ctaText: "LEARN: HOW TO GET THE BEST RESULTS FROM ED MEDICATION",
          ctaUrl:
            "https://www.forhims.co.uk/blog/5-tips-for-taking-ed-medication-effectively"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-four",
        props: {
          id: "ed-fifty-copy-four",
          title: "Stay safe",
          body:
            "Your order will come with detailed safety information. Make sure you take a minute to read through it. Certain things don’t mix with Viagra Connect ® — like nitrites, alcohol in excess, grapefruit and alpha-blockers. And easy partner — you shouldn’t take it more than once daily. Precaution is as important as the fix.",
          imageId: "Hims_PDP_PEJ_Image5050_03",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right",
          ctaLabel: "LEARN: ED AND YOUR REFRACTORY PERIOD",
          ctaText: "LEARN: ED AND YOUR REFRACTORY PERIOD",
          ctaUrl:
            "https://www.forhims.co.uk/blog/can-ed-drugs-shorten-your-refractory-period"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-five",
        props: {
          id: "ed-fifty-copy-five",
          title: "Side effects",
          body:
            "As with all medication, side effects may occur. The side effects most commonly associated with Viagra Connect® include headaches, flushing, upset stomach, abnormal vision, runny or stuffy nose, muscle and back pain, nausea, dizziness, and rash. As always, if you have questions or any side effects that bother you or linger, please get in touch, and we will advise accordingly. If you have an erection that lasts longer than 4 hours, get medical help immediately.",
          imageId: "hims-pdp-ed-blog5050-temp-01",
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
