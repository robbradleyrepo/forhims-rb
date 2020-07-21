export const examplePdp = {
  componentType: "page",
  id: "UNIQUE_PAGE_ID",
  theme: "sex | skin | hair",
  props: {
    title: "Page Title",
    description: "This is a meta description of the page contents",
    sections: [
      {
        componentType: "pdp-hero",
        props: {
          titlePartOne: "addyi ® (flibanserin) 100mg tablets  ",
          titlePartTwo: "tablets",
          productDetails: [
            {
              label: "Product attribute for top section"
            },
            {
              label: "Another product attribute for hero section"
            }
          ],
          // Cloudinary Image ID
          images: "IMAGE_ID",
          description: "This is the lead description of our product",
          addToCartButtonLabel: "try today - {{price, price}}"
        }
      },
      {
        componentType: "center-align-markdown-text",
        props: {
          // This text uses markdown formatting to create text styles
          // Text wrapped in [](#) will be colored and underlined
          smallText: `the [struggle](#) to receive [birth control](#) is absurd. We’d like to change that.`,
          largeText: `the [struggle](#) to receive [birth control](#) is absurd. We’d like to change that.`,
          bgImages: "IMAGE_ID"
        }
      },
      // This component is not found on every page, only Addyi and Birth Control I believe
      {
        componentType: "icon-title-description-list",
        props: {
          items: [
            {
              title: "made by a woman",
              description: "for all women."
            },
            {
              title: "fda approved",
              description: "and it works"
            },
            {
              title: "hypoactive sexual desire disorder?",
              description: "real, but not the end."
            }
          ]
        }
      },
      {
        componentType: "product-knowledge-image-left",
        props: {
          title: "what is it good for?",
          description:
            "Whether your sex drive has changed since having kids, becoming premenopausal, or perhaps have never craved sex as frequently as you’d like, Addyi ® (flibanserin) 100mg tablets   is here to help increase your desire for sex.",
          images: "IMAGE_ID",
          productDetails: [
            {
              label: "Product attribute"
            },
            {
              label: "Another product attribute"
            }
          ]
        }
      },
      {
        componentType: "product-knowledge-image-right",
        props: {
          title: "how does it work?",
          description:
            "Though commonly referred to as “female viagra,” Addyi ® (flibanserin) 100mg tablets   works on a much deeper level than Viagra, it helps activate the parts of the female brain that respond to sexual cues. For us, sex is a lot more than a blood flow issue.",
          images: "IMAGE_ID",
          productDetails: []
        }
      },
      {
        componentType: "product-usage",
        props: {
          title: "how is it used?",
          description:
            "No more booking time off to go to the doctor, pharmacy lines, or insurance company on-hold music. In every way possible, we would like to take this hassle off of your plate.",
          images: ["IMAGE_ID", "IMAGE_ID", "IMAGE_ID"]
        }
      },
      {
        componentType: "category-blog",
        props: {
          category: "sex | hair | sex",
          title: "This is a title for the blog section",
          description: `A description in the left column of the blog page, beside related posts.`
        }
      },
      {
        componentType: "category-products",
        props: {
          category: "sex | hair | skin",
          title: "A title for the related products section"
        }
      },
      {
        componentType: "soft-footer",
        props: {
          text: "Text that will run across the page",
          images: "IMAGE_ID"
        }
      }
    ]
  }
};
