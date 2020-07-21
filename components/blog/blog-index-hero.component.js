import React from "react";

import { Block } from "../../components/block";
import { Headline0, Headline4 } from "../../components/fonts";
import {
  createCloudinaryMobileUrl,
  createCloudinaryDesktopUrl
} from "../../utils/cloudinary";

import {
  BlogIndexHeroContainer,
  BlogIndexHeroContentContainer,
  BlogHeroDescriptionWrapper
} from "./blog.style";

export const BlogIndexHero = () => (
  <BlogIndexHeroContainer
    bgImages={[
      createCloudinaryMobileUrl("hims-blog-atf"),
      createCloudinaryMobileUrl("hims-blog-atf"),
      createCloudinaryDesktopUrl("hims-blog-atf"),
      createCloudinaryDesktopUrl("hims-blog-atf")
    ]}
  >
    <BlogIndexHeroContentContainer
      item
      xsOffset={1}
      xs={11}
      sm={12}
      smOffset={2}
      md={12}
      mdOffset={2}
      lg={12}
      lgOffset={2}
      isLoaded
    >
      <Block mb={3}>
        <Headline0 as="h1">Savoir Faire</Headline0>
      </Block>
      <BlogHeroDescriptionWrapper>
        <Headline4 as="p">
          it’s french. say it how it’s supposed to be said.<br />
          it’ll make your mouth feel funny.
        </Headline4>
      </BlogHeroDescriptionWrapper>
    </BlogIndexHeroContentContainer>
  </BlogIndexHeroContainer>
);
