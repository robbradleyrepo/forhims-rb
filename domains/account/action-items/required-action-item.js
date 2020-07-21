import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  padding-bottom: ${({ theme }) => theme.spacing.three};
  text-transform: uppercase;
`;

const Description = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  line-height: 1.5;
`;

const RequiredActionItem = ({
  className,
  description,
  onClick,
  title,
  testId
}) => (
  <div className={className} onClick={onClick} data-testid={testId}>
    <Header>{title}</Header>
    <Description>{description}</Description>
  </div>
);

RequiredActionItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  testId: PropTypes.string,
  title: PropTypes.string
};

RequiredActionItem.displayName = "EmrAction";

export default RequiredActionItem;
