import styled from "styled-components";

export const FollowUpTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.three};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const backToMenuLink = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.colors.canvas.brand};
`;

export const AssignmentIconContainer = styled.div`
  margin: 0 auto;
  display: flex;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.six};
  margin-bottom: ${({ theme }) => theme.spacing.three};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand.sex};
`;

export const FollowUpCopyContainer = styled.p`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  max-width: 400px;
  margin-top: ${({ theme }) => theme.spacing.one};
  margin-left: auto;
  margin-right: auto;
`;

export const BackToMenuLink = styled.a`
  display: block;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding-bottom: ${({ theme }) => theme.spacing.one};
  border-bottom: 1px solid ${({ theme }) => theme.colors.brand.sex};
  width: 110px;
  text-align: center;
  letter-spacing: 0.11rem;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;
