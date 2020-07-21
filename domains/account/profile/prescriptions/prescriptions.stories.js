import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Prescriptions } from "./prescriptions.component";
import { PrescriptionsListItem } from "./prescriptions-list-item.component";

const mockPrescriptions = [
  {
    id: "yFEWWdJS",
    title: "The Acne Kit",
    treatmentPlan: "/treatments/acne"
  },
  {
    id: "yFEWWdJS1",
    title: "The Hair Kit",
    treatmentPlan: "/treatments/hair"
  }
];

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  max-width: 50vw;
`;

storiesOf("Domains|Account/Profile/Prescriptions", module)
  .add("Prescription List Item", () => (
    <PreviewContainer>
      <PrescriptionsListItem {...mockPrescriptions[0]} />
    </PreviewContainer>
  ))
  .add("Prescriptions List", () => (
    <PreviewContainer>
      <Prescriptions prescriptions={mockPrescriptions} />
    </PreviewContainer>
  ));
