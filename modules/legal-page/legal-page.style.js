import styled, { css } from "styled-components";

const TextStyles = css`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.6;
`;

export const LegalParagraph = styled.p`
  ${TextStyles};
`;

export const LegalList = styled.ul`
  ${TextStyles};
`;

export const LegalListOrdered = styled.ol`
  ${TextStyles};

  ol {
    list-style: lower-latin;

    ol {
      list-style: lower-roman;
    }
  }
`;

export const Strong = styled.strong`
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Emphasis = styled.em``;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: ${({ theme }) => theme.spacing.three};

  td,
  th {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui.divider};
    padding: ${({ theme }) => theme.spacing.two}
      ${({ theme }) => theme.spacing.three};
  }

  th {
    text-align: left;
    background-color: ${({ theme }) => theme.colors.ui.shadow};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
