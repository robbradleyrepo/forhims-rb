import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { HowItWorks } from "./how-it-works.component";

const PreviewContainer = styled.div`
  min-height: 150vh;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf("Modules|How It Works", module).add("Basic", () => {
  const eyebrowText = text("Eyebrow text", "Easy as 1, 2, 3.");
  const headlineText = text("Headline text", "How it works");
  const cardEyebrowText = text("Card 1 eyebrow text", "Step 1");
  const cardHeadlineText = text("Card 1 headline text", "Secure assessment.");
  const cardEmoji = text("Card 1 emoji", "✍️");
  const cardDescription = text(
    "Card 1 description",
    "A secure online onboarding process assesses your medical history, sexual health, current medications, allergies and symptoms."
  );

  return (
    <PreviewContainer>
      <HowItWorks
        eyebrowText={eyebrowText}
        headlineText={headlineText}
        cards={[
          {
            eyebrowText: cardEyebrowText,
            headlineText: cardHeadlineText,
            emoji: cardEmoji,
            description: cardDescription
          },
          {
            eyebrowText: "Step 2",
            headlineText: "A doctor reviews your order.",
            emoji: "👨‍⚕️",
            description:
              "Within a day, a licensed physician will review your request and will write a prescription if appropriate."
          },
          {
            eyebrowText: "Step 3",
            headlineText: "Delivered for free.",
            emoji: "📦",
            description:
              "Hims will ship your medication for free and automatically refill it every month."
          }
        ]}
      />
    </PreviewContainer>
  );
});
