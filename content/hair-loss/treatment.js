import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const treatmentPageFinasteride = {
  componentType: "page",
  id: "finasteride-treatment-page",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpHairFinasteride
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
            description: `Want your hair back? Through hims, you can get a free online consultation with a doctor to help treat your hair loss. Finasteride is a medicine used to treat male pattern baldness at the crown and in the middle of the scalp.`,
            secondaryDescriptor: "28 x 1 mg for {{ price }}/month",
            tryNowText: "Start your free consultation →",
            warningCaption:
              "* Prescription products require an online consultation with a physician who will determine if a prescription is appropriate. * Finasteride may cause side effects. Tell your doctor if any of these symptoms are severe or do not go away: inability to have or maintain an erection, decreased sexual desire, problems with ejaculation (including decreased volume of ejaculate), pain in the testicles or depression.",
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
        id: "ed-fifty",
        props: {
          id: "ed-fifty-1",
          title: "",
          body:
            "If you are interested in getting your hair loss treated, make sure you take a free online consultation through Hims. Once complete, a UK doctor will review your consultation, and assess whether or not Finasteride is a suitable treatment for you.",
          imageId: "hair-5050-{imageSize}",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right"
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
          id: "ed-text-1",
          eyebrow: "___",
          title: "How to take",
          subtitle: `Read the patient information leaflet that comes with your delivery before you start taking the medicine. It contains important information about how to take it and what to expect, as well as important safety information, including warnings and precautions and possible side effects. Always take Finasteride as directed by your doctor.`,
          imageId: "hair3",
          category: "ed",
          products: [
            {
              id: PRODUCT_ID_BY_NAME.finasteride,
              title: "Finasteride",
              description: "28 x 1 mg for {{ price }}/month",
              buttonLabel: "Start your consultation",
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
        componentType: "soft-footer",
        id: "hairLossFooter",
        props: {
          id: "ed-footer",
          bgColor: colors.canvas.frostGray,
          image: "hims-softfooter-01.jpg",
          imageAltText: "Martini Glass",
          text: `shout out to the guys who aren’t afraid to take care of themselves`
        }
      }
    ]
  }
};
