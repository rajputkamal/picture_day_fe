"use client";

import React from "react";
import { Modal } from "../components/Modal";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";

type FormFailuresProps = {
  setStatus?: (status: "success" | "failure" | null) => void;
};

const FormFailure = ({ setStatus }: FormFailuresProps) => {
  return (
    <Modal setStatus={setStatus}>
      <StyledSection>
        <RiCloseCircleLine />
        <p>Oops! Something went wrong, please try again.</p>
      </StyledSection>
    </Modal>
  );
};

const StyledSection = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    scale: 5;
    fill: #dc3545;
  }
  & p {
    font-size: 20px;
    line-height: 28px;
    margin-top: 24px;
    text-align: center;
  }
`;

export { FormFailure };
