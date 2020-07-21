import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpMouthAciclovir = {
  componentType: "page",
  id: "Aciclovir-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpMouthAciclovir
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "Aciclovir-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.sildenafil,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "acyclovir-product-hero",
        props: {
          backgroundColor: "skin",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.sildenafil,
            productSummaryEyebrow: "The Cold Sore Treatment",
            productName: "Cold Sore Kit",
            description: `Cold sores are a pain, literally. Why let those little dormant devils keep you down? Get a free online consultation with a doctor through hims to see if cold sore treatment is right for you. Medicines like aciclovir can lessen the severity and length of breakouts to reduce this stress in your life. `,
            secondaryDescriptor: "",
            tryNowText: "Start my free consultation →",
            warningCaption:
              "* Prescription products require an online consultation with a doctor  after checkout who will determine if a prescription is appropriate. * Aciclovir may cause side effects. Tell your doctor if any of these symptoms are severe or do not go away: headache, upset stomach, vomiting, diarrhea/loose stools or constipation.",
            showISI: true,
            showForm: true,
            offerDescriptor: "",
            offerCTA: "Join Waitlist"
          },
          image: "box-closed-pink-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Aciclovir"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "mouth-fifty-copy-one",
        props: {
          id: "mouth-fifty-copy-one",
          title: "how to take",
          body:
            "Read the patient information leaflet that comes with your delivery before you start taking the medicine. It contains important information about how to take it and what to expect, as well as important safety information, including warnings and precautions and possible side effects. Always take aciclovir as directed by your doctor.",
          imageId: "hims-home-mission-03.jpg",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right",
          ctaLabel: "LEARN: HOW TO GET RID OF A COLD SORE FAST",
          ctaText: "LEARN: HOW TO GET RID OF A COLD SORE FAST",
          ctaUrl:
            "https://www.forhims.co.uk/blog/how-to-get-rid-of-a-cold-sore-quickly"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "mouth-fifty-copy-two",
        props: {
          id: "mouth-fifty-copy-two",
          title: "a viral suppressive",
          body:
            "Aciclovir is an antiviral suppressive that treats Herpes Simplex Virus Type-1, also known as HSV-1, which is the type of herpes that most commonly causes cold sores.",
          imageId: "11_Hims_Skin_PLP_AgingCanBeScary_Resized",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "mouth-fifty-copy-three",
        props: {
          id: "mouth-fifty-copy-three",
          title: "The science",
          body:
            "By blocking the virus' polymerase enzyme, aciclovir can stop the HSV-1 virus from building DNA and replicating itself inside of you. This reduces the severity of your cold sore breakouts as well as the ability for the virus to transfer between folks.",
          imageId: "hims-box-closed-animation",
          hasButtonCta: false,
          cardSide: "right",
          overlap: false,
          stacksOnTop: "right"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "ed-fifty-copy-four",
        props: {
          id: "ed-fifty-copy-four",
          title: "What about genitals?",
          body:
            "Though this antiviral drug can be used to treatGenital Herpes, our platform only provides access to online consultations to treat Oral Herpes, typically caused by HSV-1.",
          imageId: "product/mouth/acyclovir/Hims_PDP_Herpes_Text6040_02",
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
          text: "Just a metaphor to help remind you to look your best.",
          eyebrowText: "Keep your skin in the game.",
          image: "product/mouth/acyclovir/Hims_PDP_Herpes_SoftFooter",
          imageAltText: "Dough ball",
          bgColor: colors.canvas.peachOrange
        }
      }
    ]
  }
};
