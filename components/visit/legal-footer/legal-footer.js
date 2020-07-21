import React from "react";
import PropTypes from "prop-types";

import { MODAL_COMPONENT_IDENTIFIERS } from "../../../domains/modal/components/helpers/component-id-mapping";
import styled from "styled-components";
import { Block } from "../../block";

const LegalFooterLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.callout};
  display: inline-block;
  margin: 0 ${({ theme }) => theme.spacing.two};
  &:hover {
    text-decoration: underline;
  }
`;

const LegalFooterContainer = styled(Block)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.five} 0;
`;

const LegalFooter = ({ openModelHandler }) => (
  <LegalFooterContainer>
    <Block textAlign={"center"}>
      <Block>Powered by Hims</Block>
      <LegalFooterLink
        onClick={() =>
          openModelHandler({
            content: {
              id: MODAL_COMPONENT_IDENTIFIERS.EMR_LEGAL_FOOTER_SERVICE_TERMS
            }
          })
        }
      >
        Service Terms
      </LegalFooterLink>
      <LegalFooterLink
        onClick={() =>
          openModelHandler({
            content: {
              id: MODAL_COMPONENT_IDENTIFIERS.EMR_LEGAL_FOOTER_USER_TERMS
            }
          })
        }
      >
        User Terms
      </LegalFooterLink>
      <LegalFooterLink
        onClick={() =>
          openModelHandler({
            content: {
              id: MODAL_COMPONENT_IDENTIFIERS.EMR_LEGAL_FOOTER_PRIVACY_POLICY
            }
          })
        }
      >
        Privacy Policy
      </LegalFooterLink>
    </Block>
  </LegalFooterContainer>
);

LegalFooter.displayName = "LegalFooter";

LegalFooter.propTypes = {
  openModelHandler: PropTypes.func.isRequired
};

export default LegalFooter;
