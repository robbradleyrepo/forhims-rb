import { PRODUCT_ID_BY_NAME } from "../../../config/product-ids-by-name";
import { colors } from "../../../theme/colors";
import { ROUTE_PATHS } from "../../../routes/routes.constants";

export default {
  componentType: "leadgen",
  props: {
    productId: PRODUCT_ID_BY_NAME.sildenafilp,
    content: [
      {
        useComponent: "hero",
        props: {
          title: "helping British guys get it up",
          subTitle:
            "the doctor-approved ED pill that's effective, affordable, and discreet.",
          image: "HimsUK-pdp-ED-atf-{imageSize}-2x-reverse",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          actionScrollDownLabel: undefined,
          actionConsultationLabel: "Start a free online consultation"
        }
      },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "have you ever experienced ED?",
          subTitle: "(it's totally normal — 1 in 4 guys under 40 has it.)",
          count: 1,
          countTotal: 5,
          answers: [
            { label: "yes" },
            { label: "no", redirect: ROUTE_PATHS.root },
            { label: "not sure" }
          ]
        }
      },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "how is this affecting your life?",
          count: 2,
          countTotal: 5,
          color: colors.canvas.primaryLight,
          answers: [
            { label: "I avoid having sex" },
            { label: "I feel anxious/depressed" },
            { label: "I lost my swagger" },
            { label: "hurting my relationship" },
            { label: "trouble having kids" }
          ]
        }
      },
      // {
      //   useComponent: "factoids",
      //   props: {
      //     title: "treatment in three easy steps",
      //     ordered: true,
      //     items: [
      //       {
      //         title: "talk shop with a doc",
      //         body:
      //           "simple, free online consultation with one of our licensed doctors from the comfort of your home.",
      //         image: "domains/leadgen/leadgen__doc"
      //       },
      //       {
      //         title: "get the goods delivered, discreetly",
      //         body:
      //           "if approved, the ed treatment comes directly to the door every month with free shipping!",
      //         image: "domains/leadgen/leadgen__delivery"
      //       },
      //       {
      //         title: "worry free refills",
      //         body:
      //           "no more worrying about getting your prescription in time with our auto renewal. don't worry you can cancel at any time!",
      //         image: "domains/leadgen/leadgen__refill"
      //       }
      //     ]
      //   }
      // },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "how quickly are you looking for a solution?",
          count: 3,
          countTotal: 5,
          answers: [
            { label: "right now" },
            { label: "before the weekend..." },
            { label: "this month" }
          ]
        }
      },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "what has stopped you from getting treatment before?",
          count: 4,
          countTotal: 5,
          color: colors.canvas.frostGray,
          answers: [
            { label: "no clue where to start" },
            { label: "viagra is expensive" },
            { label: "awkward doc visit? pass" },
            { label: "don't want anyone to know" },
            { label: "new issue to me" }
          ]
        }
      },
      // {
      //   useComponent: "testimonials",
      //   props: {
      //     title: "the experiences of our customers with Hims",
      //     color: colors.canvas.primaryLight,
      //     items: [
      //       {
      //         quote:
      //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet facere provident corporis dignissimos recusandae?",
      //         source: "First Source"
      //       },
      //       {
      //         quote:
      //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet facere provident corporis dignissimos recusandae?",
      //         source: "Second Source"
      //       },
      //       {
      //         quote:
      //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet facere provident corporis dignissimos recusandae?",
      //         source: "Final Source"
      //       }
      //     ]
      //   }
      // },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "how will your life improve if your ED is treated?",
          count: 5,
          countTotal: 5,
          answers: [
            { label: "fuel between the sheets 🚀" },
            { label: "happy partner, happy life 😉" },
            { label: "probs get promoted 🏆" },
            { label: "all of the above 🔥🔥" }
          ]
        }
      },
      {
        useComponent: "exit-cta",
        props: {
          title: `you're in luck! ED can be optional.`,
          color: colors.canvas.primary,
          body:
            "**for as low as £3.50/dose, get your confidence back in the bedroom, or wherever you like to, you know...**  \n  \nour most popular treatment for ED is Sildenafil - the MHRA approved, generic version of Viagra (but much less expensive).  \n  \nit works by increasing blood flow to the penis - when you're aroused - to help you get or maintain an erection.  \n  \nget started with a free online consultation with a UK doctor. it takes less than 5 minutes to complete and is 100% confidential.",
          image: "domains/leadgen/leadgen__sex__exit_cta.jpg"
        }
      }
    ]
  }
};
