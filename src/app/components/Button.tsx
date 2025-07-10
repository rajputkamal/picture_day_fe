"use client";

import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  submitButton?: boolean;
};

const Button = ({
  title,
  onClick,
  type,
  secondary,
  submitButton,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      secondary={secondary}
      onClick={onClick}
      submitButton={submitButton}
    >
      {title}
    </StyledButton>
  );
};

type StyledButtonProps = {
  secondary?: boolean;
  submitButton?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>(
  ({secondary, submitButton}) => css`
    /* background-color: #ffb400; */
    background-color: ${secondary ? "transparent" : submitButton ? 'black' : "white"};
    color: ${secondary || submitButton ? "white" : "black"};
    border: 1px solid ${secondary ? "white" : "black"};
    display: inline-flex;
    width: max-content;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 2rem;
    word-break: break-word;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${secondary ? "#414243" : submitButton ? "white" : "black"};
      /* color: white; */
      color: ${submitButton ? "black" : "white"};
      transition: all 0.3s ease-in-out;
    }
  `
);

export { Button };
