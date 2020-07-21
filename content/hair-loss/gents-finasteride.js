import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";

export const gentsFinasteride = {
  componentType: "page",
  id: "finasteride-treatment-page",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.gentsfinasteride
      },
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.pdpHairFinasteride
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "hair-treatment-floating-add-to-cart",
        props: {
          label: "Start your free consultation →",
          productId: PRODUCT_ID_BY_NAME.finasteride,
          variant: "accent"
        }
      },
      {
        componentType: "product-hero",
        id: "ed-product-hero",
        props: {
          backgroundColor: "sex",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.finasteride,
            productSummaryEyebrow: "Treat Hair Loss",
            productName: "Finasteride",
            description: `Want more hair? This is the pill for that. Finasteride is used to treat male pattern baldness at the crown and in the middle of the scalp.`,
            secondaryDescriptor: "28 x 1 mg for {{ price }}/month",
            tryNowText: "Start your free consultation →",
            warningCaption:
              "* Prescription products require a medical consultation via an online assessment after checkout",
            showISI: true
          },
          image: "Hims_PDP_Finasteride_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "A medication bottle with 'hims' on the label"
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "hairloss-fifty-steps",
        props: {
          id: "hairloss-fifty-steps",
          titleSmall: "How does it work? ",
          subTitle: "",
          body: "",
          items: [
            "**Secure online consultation.** Complete the consultation in the comfort of your own home. ",
            "**The doctor will see you now.** A doctor will review your completed consultation.",
            "**Delivered to your door.** At your door after online doctor approval."
          ],
          imageId: "hair-5050-{imageSize}",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "product-summary",
        id: "finasteride-text-1",
        props: {
          title: "What is Finasteride?",
          description:
            "Finasteride is a medication that treats hair loss in men by blocking DHT (dihydrotestosterone). DHT is a hormone derived from testosterone thought to be the reason why many guys experience hair loss.",
          mainImage: "1347-11A_HIM_HIR_SKIN_CACTUS_01",
          mainImageAltText: "A spiky cactus",
          badgeImage: "Hims_PDP_Kit1_Fact_01",
          badgeImageAltText: "A fuzzy cactus"
        }
      },
      {
        componentType: "product-baseball-cards",
        id: "hairLossProductOffering",
        props: {
          id: "hairloss-text-1",
          eyebrow: "___",
          title: "Lets help you keep the hair on your head",
          subtitle: `We get it. You’re busy you’d rather avoid the uncomfortable conversation, right? So we made it easy, like stupid easy, to access the personalised care you need. Start your consultation and connect with a practicing UK GP.  If what we offer is right for you, a GP can prescribe you the necessary medication.`,
          imageId: "hair3",
          category: "ed",
          products: [
            {
              id: PRODUCT_ID_BY_NAME.finasteride,
              title: "Finasteride",
              description: "28 x 1 mg for {{ price }}/month",
              buttonLabel: "Start your free consultation →",
              sku: "*FH*Finasteride*30*1mg",
              meta: null,
              is_bundle: false,
              requires_subscription: true,
              requires_consultation: true,
              bundle_id: "4tidlPg9",
              tags: ["hair"],
              prescriptions: ["HAIR_LOSS"],
              tax_code: "PH050102",
              bundle_ids: ["4tidlPg9", "kdyQVtH1", "6IOIPgvr", "RnoG8sn7"],
              contents: null,
              status: "active"
            }
          ]
        }
      },
      {
        componentType: "image-and-text",
        id: "hairLossImageAndText",
        props: {
          id: "hairLossImageAndText",
          image: "guide-forhims.png",
          imageAltText: "Hair Loss Guide - Image",
          heading:
            "5 signs of thinning hair men should watch for in their 20s.",
          text: `Hair loss is something that happens to the majority of men at some point in time.`,
          textTwo:
            "Download the guide and start getting clued up on what you can do today that your future self will thank you for.",
          ctaLabel: "Get the Guide",
          ctaText: "Get the Guide",
          ctaUrl:
            "https://res.cloudinary.com/forhims/image/upload/v1576774480/HimsUK/Marketing%20Comms/5_Signs_Of_Thinning_Hair_Men_Should_Watch_For_In_Their_20_s.pdf",
          hasButtonCta: true
        }
      }
    ]
  }
};
