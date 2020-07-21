import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";

export const gentsSildenafil = {
  componentType: "page",
  id: "sildenafil-treatment-page",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.gentsSildenafil
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
          label: "Start your free consultation →",
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
            description: `Sildenafil is the active ingredient in Viagra and an MHRA approved to treat ED. It helps relax blood vessels and improves blood flow to your penis to allow for a harder and longer-lasting erection.`,
            secondaryDescriptor: "8 x 50 mg for {{ price }}/month",
            tryNowText: "Start your free consultation →",
            warningCaption:
              "* Prescription products require a medical consultation via an online assessment after checkout",
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
        id: "ed-fifty-steps",
        props: {
          id: "ed-fifty-steps",
          titleSmall: "How does it work?",
          subTitle: "",
          body: "",
          itemOne:
            "Secure online consultation. Complete the consultation in the comfort of your own home. ",
          itemTwo:
            "The doctor will see you now. A doctor will review your completed consultation.",
          itemThree:
            "Delivered to your door. At your door after online doctor approval.",
          imageId: "hims-pdp-ed-fullwidth-01",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left"
        }
      },
      {
        componentType: "product-baseball-cards",
        id: "edProductOffering",
        props: {
          id: "ed-baseball-cards",
          eyebrow: "___",
          title: "Prevention. So much more effective than denial",
          subtitle:
            "We get it. You’re busy you’d rather avoid the uncomfortable conversation, right? So we made it easy, like stupid easy, to access the personalised care you need. Start your consultation and connect with a practicing UK GP.  If what we offer is right for you, a GP can prescribe you the necessary medication.",
          imageId: "ed3",
          category: "ed",
          products: [
            {
              id: PRODUCT_ID_BY_NAME.sildenafil,
              title: "Sildenafil",
              description: "8 x 50 mg for {{ price }}/month",
              buttonLabel: "Start your free consultation →",
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
        componentType: "image-and-text",
        id: "edImageAndText",
        props: {
          id: "edImageAndText",
          image: "debunk-forhims.png",
          imageAltText: "Erectile Dysfunction Guide - Image",
          heading: "Debunking 5 Myths Around Erectile Dysfunction",
          text: `As much as you may think you know about erectile dysfunction, we bet you might be surprised by some of the facts.`,
          textTwo: `Download the guide and start getting clued up.`,
          ctaLabel: "Get the Guide",
          ctaText: "Get the Guide",
          ctaUrl:
            "https://res.cloudinary.com/forhims/image/upload/v1576774543/HimsUK/Marketing%20Comms/Debunking_5_Myths_Around_Erectile_Dysfunction.pdf",
          hasButtonCta: true
        }
      }
    ]
  }
};
