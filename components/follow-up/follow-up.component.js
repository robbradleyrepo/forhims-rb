import React from "react";
import { Button } from "../button";
import { Block } from "../block";
import { AssignmentIcon } from "../../components/icons/assignment-icon";
import {
  FollowUpTitle,
  AssignmentIconContainer,
  FollowUpCopyContainer,
  BackToMenuLink
} from "./follow-up.styles";
export const FollowUp = () => (
  <Block
    width="100%"
    display="flex"
    justify-content="center"
    flexDirection="column"
  >
    <FollowUpTitle>Follow-Up</FollowUpTitle>
    <AssignmentIconContainer>
      <AssignmentIcon color="white" height="24px" />
    </AssignmentIconContainer>
    <Block
      pl={5}
      pr={5}
      pb={3}
      lineHeight={"2.25"}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <FollowUpCopyContainer>
        Please take a moment to complete follow-up consultation so we can ship
        your next order. This is required to assess side effect as well as
        progress.
      </FollowUpCopyContainer>
      <FollowUpCopyContainer>
        the cost of the follow-up medical visit is $5.00
      </FollowUpCopyContainer>
    </Block>
    <Block display="flex" justifyContent="center">
      <Button label="Start follow-up consultation" />
    </Block>
    <Block width="100%" mt={4}>
      <BackToMenuLink>BACK TO MENU</BackToMenuLink>
    </Block>
  </Block>
);

FollowUp.dispalyName = "FollowUp";
