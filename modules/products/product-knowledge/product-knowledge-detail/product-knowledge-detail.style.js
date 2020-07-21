import styled from "styled-components";
import { BodySmall } from "../../../../components/fonts";

export const ProductDetailWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing.three};
  width: 100%;
`;

export const ProductDetailIconWrapper = styled.div`
  line-height: 1;
`;

export const ProductDetailBulletText = styled(BodySmall)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProductDetailLabelWrapper = styled(BodySmall)`
  overflow-wrap: break-word;
`;
