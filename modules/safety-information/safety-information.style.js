import styled from "styled-components";

export const SafetyInformationWrapper = styled.section`
  h1,
  h2,
  h3,
  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.three};
  }

  padding: ${({ theme }) => `${theme.spacing.four} ${theme.spacing.five}`};

  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  width: 75%;
  margin: 0 auto;
`;

export const SafetyInformationTitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SafetyInformationButtonWrapper = styled.section`
  & button {
    min-width: ${({ theme: { spacing } }) => spacing.two};

    :focus {
      outline: none;
    }
  }
`;

export const SafetyInformationContentWrapper = styled.section`
  margin-top: ${({ theme }) => theme.spacing.four};

  & p {
    line-height: 1.75rem;
  }
`;
