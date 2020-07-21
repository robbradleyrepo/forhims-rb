import { PRODUCT_ID_BY_NAME } from "../../../config/product-ids-by-name";
import { colors } from "../../../theme/colors";
import { ROUTE_PATHS } from "../../../routes/routes.constants";

export default pathname => ({
  componentType: "leadgen",
  props: {
    productId: PRODUCT_ID_BY_NAME.finasteride,
    content: [
      {
        useComponent: "hero",
        props: {
          title:
            pathname === ROUTE_PATHS.quizes.finasteride
              ? "the 60 second hair loss quiz"
              : "keeping the hair on your head",
          quizTitle: "",
          subTitle:
            "for guys who want strong, sexy hair. find the treatment that's right for you",
          image: "domains/leadgen/leadgen__hair__hero-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          actionScrollDownLabel:
            pathname === ROUTE_PATHS.quizes.finasteride
              ? "Start the 60 second quiz"
              : undefined,
          actionConsultationLabel:
            pathname === ROUTE_PATHS.quizes.finasteride
              ? undefined
              : "Start a free online consultation"
        }
      },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "do you have concerns about balding?",
          subTitle:
            "(it's totally normal — 66% of men lose their hair by age 35.)",
          count: 1,
          countTotal: 5,
          answers: [
            { label: "yes" },
            { label: "no", redirect: ROUTE_PATHS.root },
            { label: "I mean, I'm here, right?" }
          ]
        }
      },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "are you experiencing any of the following symptoms?",
          count: 2,
          countTotal: 5,
          color: colors.canvas.primaryLight,
          answers: [
            { label: "thinning hair" },
            { label: "bald spot at crown" },
            { label: "finding hair everywhere" },
            { label: "head looks bigger" },
            { label: "receding hairline" }
          ]
        }
      },
      // {
      //   useComponent: "factoids",
      //   props: {
      //     title: "whatever your concern",
      //     subTitle:
      //       "the hims hair loss treatment contains doctor recommended MHRA approved products you need to help all areas of concern.",
      //     items: [
      //       {
      //         title: "overall thinning",
      //         image: "domains/leadgen/leadgen__thinning"
      //       },
      //       {
      //         title: "thinning at the crown",
      //         image: "domains/leadgen/leadgen__crown"
      //       },
      //       {
      //         title: "receding",
      //         image: "domains/leadgen/leadgen__receding"
      //       }
      //     ]
      //   }
      // },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "how is this affecting your life?",
          count: 3,
          countTotal: 5,
          color: colors.canvas.frostGray,
          answers: [
            { label: "feel less confident" },
            { label: "ain't hat-friendly? ain't goin'" },
            { label: "feel anxious/depressed" },
            { label: "look older than I am" }
          ]
        }
      },
      // {
      //   useComponent: "testimonials",
      //   props: {
      //     title: "see what our guys have to say about hair after hims",
      //     color: colors.canvas.primaryLight,
      //     items: [
      //       {
      //         quote: `"hims is the real deal. i can say in the last two months i have seen a transformation. my hair is fuller and thicker."`,
      //         source: "Michael"
      //       },
      //       {
      //         quote: `"as a guy who is battling hair loss, i consider hims an important asset. they have given me tools to help me keep my hair. i recommend this company."`,
      //         source: "Sven"
      //       },
      //       {
      //         quote: `"i am pretty sure this is not only working but, that this is the best, easiest system i have tried to date. great price and products. thank you!"`,
      //         source: "Daniel"
      //       }
      //     ]
      //   }
      // },
      {
        useComponent: "question-multi-choice",
        props: {
          question: "what has stopped you from getting treatment before?",
          count: 4,
          countTotal: 5,
          answers: [
            { label: "no clue where to start" },
            { label: "thought i could hide it" },
            { label: "debating going full Statham" },
            { label: "clinging on with a comb over" },
            { label: "new issue to me" }
          ]
        }
      },
      // {
      //   useComponent: "factoids",
      //   props: {
      //     title: "treatment in three easy steps",
      //     color: colors.canvas.primaryLight,
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
          question: "how will your life improve if your hair loss is treated?",
          count: 5,
          countTotal: 5,
          color: colors.canvas.primaryLight,
          answers: [
            { label: "more swipes ➡️ more dates" },
            { label: "doing it for my partner 😎" },
            { label: "probs get promoted 🏆" },
            { label: "all of the above 🔥🔥" }
          ]
        }
      },
      {
        useComponent: "exit-cta",
        props: {
          title: `you're in luck! hair loss can be optional.`,
          color: colors.canvas.frostGray,
          body:
            "**see if hims treatments are right for you.**\n  \nget started with a free online consultation with a UK doctor. it takes less than 5 minutes to complete and is 100% confidential.",
          image: "domains/leadgen/leadgen__hair__exit_cta"
        }
      }
    ]
  }
});
