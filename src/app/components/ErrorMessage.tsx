"use client";

import styled from 'styled-components';

type ErrorMessageProps = {
  message: string;
};

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color:  #dc3545;
  letter-spacing: 0.05em;
`;

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export { ErrorMessage };
