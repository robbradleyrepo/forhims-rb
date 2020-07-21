import styled from "styled-components";

import { Button } from "../../button";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.three};
  text-align: center;
`;

export const ImagePreviewContainerRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.four} 0;
`;

export const ImagePreviewContainerColumn = styled(ImagePreviewContainerRow)`
  flex-flow: column nowrap;
`;

export const SquareImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  display: inline-block;
  margin-right: 5px;
`;

export const RetakeButton = styled(Button)`
  min-width: 150px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  padding: 0;
  margin: 0;
  border: none;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.medium};
`;

export const SquareRetakeButton = styled(RetakeButton)`
  height: 150px;
`;
