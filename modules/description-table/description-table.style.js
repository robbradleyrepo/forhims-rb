import styled from "styled-components";
import { P } from "../../components/fonts";

// TODO: Replace with reusable module wrapper component
export const ModuleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: 5rem 0;
`;

export const TableItemStyle = styled(P)`
  padding: ${({ theme }) => theme.spacing.three};
  min-height: ${({ theme }) => theme.spacing.six};
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.ui.divider};
  border-width: ${({ leftBorder, bottomBorder }) =>
    `0 0 ${bottomBorder ? "1px" : 0} ${leftBorder ? "1px" : 0}`};
`;
