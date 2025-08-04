"use client";

import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { Modal } from "../components/Modal";
import styled from "styled-components";

type FormSuccessProps = {
  userName?: string;
  feedback?: boolean;
  setStatus?: (status: "success" | "failure" | null) => void;
};

const FormSuccess = ({ userName, feedback, setStatus }: FormSuccessProps) => {
  return (
    <Modal setStatus={setStatus}>
      <StyledSection>
        <RiCheckboxCircleLine />
        {!feedback && (
          <p>
            Congratulations! <strong>{userName}</strong> <br /> Thank you for
            booking a Photo shoot. Our team will contact you shortly.
          </p>
        )}
        {feedback && (
          <p>
            Congratulations! <strong>{userName}</strong> <br /> Thank you for
            submitting your query. Our team will contact you shortly.
          </p>
        )}
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
    fill: #34a853;
  }
  & p {
    font-size: 20px;
    line-height: 28px;
    margin-top: 24px;
    text-align: center;
  }
`;

export { FormSuccess };
