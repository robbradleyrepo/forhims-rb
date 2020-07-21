import styled from "styled-components";
import { CardWithBorder } from "../card";
import { TextLink } from "../fonts/link";
import { Caption } from "../fonts/caption";
import { Block } from "../block";
import { combineRems } from "../../utils/rem";
import { Headline2 } from "../fonts/h2";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { TextFieldStyle, BarStyle } from "../text-field/text-field.style";

export const HeroContentCardWithBorder = styled(CardWithBorder)`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  border-color: ${({ theme }) => theme.colors.canvas.white};

  & ${Block} {
    text-align: center;
  }

  padding: ${({ theme: { spacing } }) =>
    `${combineRems(spacing.three, spacing.four)} ${spacing.four}`};

  ${createMinWidthMediaQuery("medium")} {
    box-shadow: ${({ theme }) => theme.boxShadows.small};
  }

  form {
    legend {
      display: block;
      margin-bottom: ${({ theme }) => theme.spacing.three};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
      text-align: center;
      color: ${({ theme }) => theme.colors.button.accent};

      p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: ${({ theme }) => theme.fontSizes.caption};
        color: ${({ theme }) => theme.colors.button.disabledText};
      }
    }

    .formElement {
      display: row;
      flex-flow: column;

      label {
        display: block;
        width: 100%;
      }
    }
    .formErrors {
      font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
      color: ${({ theme }) => theme.colors.form.error};
      text-align: left;
    }
  }
`;

export const FormHeader = styled.div``;

export const HeroContentCardInput = styled(TextFieldStyle)`
  &[name="email"] {
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing.two};
  }
  &[type="submit"] {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.three};
    padding: ${({ theme }) => theme.spacing.three};
    background-color: ${({ theme }) => theme.colors.button.accent};
    color: ${({ theme }) => theme.colors.button.accentText};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button.accentHover};
      color: ${({ theme }) => theme.colors.button.accentHoverText};
      box-shadow: ${({ theme }) => theme.boxShadows.small};
    }
  }
`;

export const HeroContentCardInputBarStyle = styled(BarStyle)`
  &:before,
  &:after {
    content: "";
    height: ${({ theme }) => theme.spacing.half};
  }
  &.error {
    &:before,
    &:after {
      background: ${({ theme }) => theme.colors.form.error};
    }
  }
`;

export const HeroContentCardProductDescription = styled.section`
  padding: ${({ theme: { spacing } }) =>
    `${spacing.three} 0 ${combineRems(spacing.two, spacing.three)} 0`};

  b {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  }
  span {
    color: ${({ theme }) => theme.colors.button.disabledText};
  }
  i {
    display: block;
    width: 80%;
    margin: auto;
    font-style: normal;
    color: ${({ theme }) => theme.colors.button.disabledText};
    font-size: ${({ theme }) => theme.fontSizes.caption};
  }
`;

export const HeroContentCardCaption = styled(Caption)`
  color: ${({ theme }) => theme.colors.button.disabledText};
  padding-top: 10px;

  a {
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.button.accent};
  }
`;

export const HeroContentCardSafetyInformationLink = styled(TextLink)`
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
`;

export const HeroContentCardTitle = styled(Headline2)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const HeroCheckboxField = styled.div`
  div label {
    width: auto !important;
    margin-left: 10px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    text-align: left;
  }
`;

export const PrivacyPolicyLink = styled.div`
  margin-top: ${({ theme }) => theme.spacing.three};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.text.primary};
  a {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
