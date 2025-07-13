"use client";

import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <Backdrop>
      <Spinner />
    </Backdrop>
  );
};

export default LoadingSpinner;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.5); /* semi-transparent gray */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* make sure it's on top */
`;

const Spinner = styled.div`
  border: 4px solid #e0e0e0; /* Light gray background */
  border-top: 4px solid #555; /* Darker gray spinner */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;
