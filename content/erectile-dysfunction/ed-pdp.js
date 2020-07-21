import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS_US, ROUTE_PATHS } from "../../routes/routes.constants";

export const edPdp = {
  componentType: "page",
  id: "silenafil874hdso8uqkjdsjk",
  theme: "sex",
  props: {
    title: "Erectile Dysfunction",
    description:
      "Learn about Erectile Dysfunction (ED) and get started with an online consultation to see if treatment is right for you.",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.plpSex
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.plpSex
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "ed-floating-add-to-cart",
        props: {
          label: "Start free consultation for Sex",
          productId: PRODUCT_ID_BY_NAME.sildenafil,
          variant: "accent"
        }
      },
      {
        componentType: "color-block",
        id: "ed-color-block-1",
        props: {
          backgroundColor: "primaryLight",
          sections: [
            {
              componentType: "product-hero",
              id: "ed-product-hero",
              props: {
                contentCard: {
                  productId: PRODUCT_ID_BY_NAME.sildenafil,
                  productSummaryEyebrow: "Erectile Dysfunction",
                  productName: "Treating ED",
                  description:
                    "We're here to help take the guesswork out of your sexy time. Request a free consultation with us and we connect you with a doctor online who can quickly review whether a treatment we offer may be right for you.",
                  ctaIsLink: true,
                  buttonVariant: "ButtonLink",
                  buttonLabel: "See Available Treatments",
                  buttonTo: "/ed/sildenafil",
                  warningCaption: ""
                },
                image: "HimsUK-pdp-ED-atf-{imageSize}-2x",
                imageDimensions: [
                  { width: 720, height: 720 },
                  { width: 720, height: 720 },
                  { width: 2880, height: 1660 },
                  { width: 2880, height: 1660 }
                ],
                title: "A large cactus"
              }
            },
            {
              componentType: "product-list",
              id: "ed-product-list",
              props: {
                category: "sex"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-1",
              props: {
                id: "ed-text-1",
                title: "Step 1: A Secure Online Consultation",
                body:
                  "Our secure online consultation process assesses your medical history, sexual health, current medications, and symptoms. This free consultation is secure, done online, and reviewed by a licensed online physician.",
                imageId: "HimsUK-PDP-ED-Text5050-01",
                hasButtonCta: false,
                cardSide: "left",
                overlap: true,
                stacksOnTop: "left"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-2",
              props: {
                id: "ed-text-2",
                title: "Step 2: Answer Some Questions",
                body:
                  "Within a few days, a doctor will review your completed consultation, follow up with any questions through secure chat and suggest best next steps.",
                imageId: "hims-pdp-ed-5050-02",
                hasButtonCta: false,
                cardSide: "right",
                overlap: false,
                stacksOnTop: "right"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-3",
              props: {
                id: "ed-text-3",
                title: "Step 3: Delivered To Your Door",
                body:
                  "If a doctor determines an Erectile Dysfunction treatment we offer is right for you, the appropriate treatment will be delivered at no additional charge.",
                imageId: "hims-pdp-hair-text5050-07",
                hasButtonCta: false,
                cardSide: "left",
                overlap: true,
                stacksOnTop: "left"
              }
            },
            {
              componentType: "block",
              id: "ed-spacing-block-2",
              props: {
                mb: 6
              }
            },
            {
              componentType: "image-block",
              id: "ed-full-width-image-1",
              props: {
                image: "hims-pdp-ed-fullwidth-01",
                title: ""
              }
            },
            {
              componentType: "block",
              id: "ed-spacing-block-3",
              props: {
                mb: 6
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-4",
              props: {
                id: "ed-blog-1",
                title: "What is Erectile Dysfunction?",
                body:
                  "Erectile Dysfunction, also referred to as impotence, is the inability to get or maintain an erection.",
                imageId: "hims-pdp-ed-blog5050-04",
                ctaText: "Learn: Causes and symptoms of ED",
                ctaUrl: "/blog/erectile-dysfunction-causes-and-symptoms",
                hasButtonCta: false,
                cardSide: "right",
                overlap: false,
                stacksOnTop: "right"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "ed-text-5",
              props: {
                id: "ed-blog-2",
                title: "How Erectile Dysfunction is Treated",
                body: `Erectile Dysfunction has a wide range of treatments. These treatments vary from therapeutic services, prescriptions medications and more.

Ready to see which treatment could be right for you?`,
                imageId: "hims-pdp-ed-blog5050-05",
                ctaText: "Start Free Sex Consultation",
                hasButtonCta: true,
                productId: PRODUCT_ID_BY_NAME.sildenafil,
                cardSide: "left",
                overlap: true,
                stacksOnTop: "left"
              }
            }
          ]
        }
      },
      {
        componentType: "color-block",
        id: "ed-color-block-3",
        props: {
          backgroundColor: "primary",
          sections: [
            {
              componentType: "soft-footer",
              id: "ed-soft-footer",
              props: {
                text:
                  "Even the world’s greatest actor cannot fake an erection.",
                eyebrowText: "- Mokokoma Mokhonoana",
                image: "hims-pdp-ed-softfooter",
                imageAltText: "",
                bgColor: "islandBlue"
              }
            }
          ]
        }
      }
    ]
  }
};
