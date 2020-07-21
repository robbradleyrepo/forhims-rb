import { ROUTE_PATHS, ROUTE_PATHS_US } from "../routes/routes.constants";
import { colors } from "../theme/colors";

export const homepage = {
  componentType: "page",
  id: "3FoR97StcImCq0kQEeEsK04",
  theme: "sex",
  props: {
    title: "hims. handsome. healthy you.",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS_US.root
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.root
      }
    ],
    description:
      "hims is a one-stop shop for men's wellness and personal care, providing treatment options for hair loss and ED",
    withSiteName: false,
    sections: [
      {
        componentType: "color-block",
        id: "homepage-color-block-1",
        props: {
          backgroundColor: "grayPink",
          sections: [
            {
              componentType: "landing-hero",
              id: "3FoR97StcImCq0kQEeEsK2",
              props: {
                title: "Gents,",
                description: `Against staggering odds, two things happened: one – the universe, two – you. Let’s walk at our full height, honour the forebears, have a smile, and for god’s sake, floss.`,
                image: "hims-homepage-hero-{imageSize}",
                imageAltText: "Bonsai tree",
                imageDimensions: [
                  { width: 1536, height: 2048 },
                  { width: 1536, height: 2048 },
                  { width: 2880, height: 1620 },
                  { width: 2880, height: 1620 }
                ],
                buttons: [
                  { label: "Hair", url: ROUTE_PATHS.plpHair },
                  { label: "Sex", url: ROUTE_PATHS.plpSex }
                  // { label: "Skin", url: ROUTE_PATHS.plpSkin }
                  // { label: "Oral", url: ROUTE_PATHS.pdpMouthAciclovir }
                ]
              }
            },
            {
              componentType: "block",
              id: "after-full-screen-image-block",
              props: { mb: 6 }
            },
            {
              componentType: "center-align-text-with-eyebrow",
              id: "homepage-center-align-text-with-eyebrow-1",
              props: {
                id: "homepage-center-align-text-with-eyebrow-1",
                smallText:
                  "Hims is about personal wellness. You should look and feel your best all the time. Men now have easier access to the care they need - because men trust hims with the things they find hard to talk about.",
                largeText:
                  "Hims is about personal wellness. You should look and feel your best all the time. Men now have easier access to the care they need - because men trust hims with the things they find hard to talk about.",
                eyebrowText: "Handsome, healthy you"
              }
            },
            {
              componentType: "hover-sprite without Cloudinary",
              id: "homepage-hover-sprite",
              props: {
                imageSrc:
                  "https://d33l6bpfmrj02a.cloudfront.net/assets_1_9_9/images/home/Hims_Home_FullImage_01_hover_blankframe.jpg",
                desktopImageSrc:
                  "https://d33l6bpfmrj02a.cloudfront.net/assets_1_9_9/images/home/Hims_Home_FullImage_01_hover_blankframe.jpg",
                mobileImageSrc:
                  "https://res.cloudinary.com/forhims/image/upload/v1546455253/HimsUK/hims-home-fullimage-m-2x.jpg",
                title: "a man doing something with his hair",
                id: "homepage-hover-sprite-1",
                duration: 1,
                ratio: 0.667,
                vertical: false,
                steps: 3
              }
            }
          ]
        }
      },
      {
        componentType: "color-block",
        id: "homepage-color-block-2",
        props: {
          backgroundColor: "primaryLight",
          sections: [
            // {
            //   componentType: "block",
            //   id: "homepage-spacing-block-1",
            //   props: {
            //     mb: { medium: 6, large: 6 }
            //   }
            // },
            {
              componentType: "how-it-works",
              id: "homepage-how-it-works",
              props: {
                eyebrowText: "Easy as 1, 2, 3.",
                headlineText: "Trusted, easy, and affordable.",
                cards: [
                  {
                    eyebrowText: "Step 1",
                    headlineText: "Free consultation.",
                    emoji: "✍️",
                    description:
                      "Complete a free and secure online consultation. It can usually be completed inside of 10 minutes."
                  },
                  {
                    eyebrowText: "Step 2",
                    headlineText: "A doctor reviews your order.",
                    emoji: "👨‍⚕️",
                    description:
                      "Within 2-3 working days, our pharmacy will review your consulation and write a prescription if appropriate."
                  },
                  {
                    eyebrowText: "Step 3",
                    headlineText: "Delivered discretely for free.",
                    emoji: "📦",
                    description:
                      "Hims will ship your medication for free and automatically refill it every month."
                  }
                ]
              }
            },
            {
              componentType: "block",
              id: "homepage-spacing-block-2",
              props: {
                mb: { medium: 6, large: 6 }
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "homepage-category-hair",
              props: {
                id: "category-hair-image-block",
                title: "Hair",
                body:
                  "Hands want something to run through. The wind needs something to mess up. Graciously oblige by doing what you need to do to keep your hair on your head.💆🏽‍♂️",
                imageId: "hims-pdp-hair-text5050-06",
                ctaLabel: "Learn more about hair loss",
                ctaText: "Learn More",
                ctaUrl: "/hair-loss",
                hasButtonCta: true,
                cardSide: "left",
                overlap: false,
                stacksOnTop: "left"
              }
            },
            {
              componentType: "fifty-fifty-callout",
              id: "homepage-category-sex",
              props: {
                id: "category-sex-image-block",
                title: "Sex",
                body:
                  "This one is simple. You need erections when you want them, not when it is convenient for your penis.🍌",
                imageId: "hims-home-sex-01",
                ctaLabel: "Learn more about erectile dysfunction",
                ctaText: "Learn More",
                ctaUrl: "/ed",
                hasButtonCta: true,
                cardSide: "right",
                overlap: true,
                stacksOnTop: "right"
              }
            }
          ]
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "homepage-blog-post-callout",
        props: {
          id: "homepage-blog-post",
          title: "Save your hair",
          body:
            "The best way to tell if you are losing your hair is to keep track of your hairline by periodically taking photos for reference.",
          imageId: "home-blog-1",
          imageAltText: "A plant with leaves falling off",
          ctaText: "Read this article",
          ctaUrl: "/blog/early-signs-of-balding",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left"
        }
      },
      // {
      //   componentType: "fifty-fifty-callout",
      //   id: "homepage-category-skin",
      //   props: {
      //     id: "category-skin-image-block",
      //     title: "Skin",
      //     body:
      //       "What's his secret? How does he own the room? Why does the world feel like a breezy hammock at the sight of his smile? Good skin. Healthy moisturised skin is the secret. 🌵",
      //     imageId: "hims-home-skin",
      //     ctaLabel: "Learn more about skin",
      //     ctaText: "Learn More",
      //     ctaUrl: "/skin-care",
      //     hasButtonCta: true,
      //     cardSide: "right",
      //     overlap: false,
      //     stacksOnTop: "right"
      //   }
      // },
      {
        componentType: "mission-purpose",
        id: "poerwimnsdwedskhj",
        props: {
          eyebrow: "The Hims Mission",
          body:
            "We hope to enable a conversation that's currently closeted. Men aren't supposed to care for themselves. What a load of bollocks.",
          linkUrl: "/about",
          linkText: "Learn more about hims",
          image: "hims-home-mission-03",
          imageAltText: ""
        }
      },
      {
        componentType: "soft-footer",
        id: "skin-soft-footer",
        props: {
          text:
            "Classic signs of balding: your hair is acting differently, you're finding hair everywhere, and you see your head getting bigger.",
          eyebrowText: "Prevention is more effective than denial",
          image: "hims-pdp-ed-softfooter",
          imageAltText: "UK flag",
          bgColor: colors.canvas.islandBlue
        }
      }
    ]
  }
};
