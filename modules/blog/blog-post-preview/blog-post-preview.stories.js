import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { BlogPostPreview } from "./blog-post-preview.component";
import { mockBlogPosts } from "../blog.mock";

storiesOf("Modules|Blog/Blog Post Preview", module)
  .add("Blog Post Preview Card", () => {
    const BlogPostPreviewContainer = styled.div`
      max-width: 50%;
    `;

    const mockPost = mockBlogPosts[4];
    const post = {
      title: mockPost.title,
      description: mockPost.summary,
      images: [
        mockPost.featuredImage,
        mockPost.featuredImage,
        mockPost.featuredImage,
        mockPost.featuredImage
      ],
      url: mockPost.url
    };
    return (
      <BlogPostPreviewContainer>
        <BlogPostPreview {...post} />
      </BlogPostPreviewContainer>
    );
  })
  .add("Blog Post Preview Card with Secondary Image", () => {
    const image =
      "https://images.unsplash.com/photo-1533675969757-c81262142071?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f12e5a8332aca139696b19a4107d2f8&auto=format&fit=crop&w=1050&q=80";
    const secondaryImage =
      "https://images.unsplash.com/photo-1533675937506-a2b8100a58c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7a447aee58c88b7eda3cd5e77cbe985&auto=format&fit=crop&w=2100&q=80";

    const post = {
      url: "/posts/1",
      title: "sex can be scary",
      description:
        "Hollywood ages gracefully for a reason, they use the best, prescription based products. Let's...",
      images: [image, image, image, image],
      secondaryImages: [
        secondaryImage,
        secondaryImage,
        secondaryImage,
        secondaryImage
      ]
    };
    const BlogPostPreviewContainer = styled.div`
      max-width: 50%;
    `;
    return (
      <BlogPostPreviewContainer>
        <BlogPostPreview {...post} />
      </BlogPostPreviewContainer>
    );
  });
