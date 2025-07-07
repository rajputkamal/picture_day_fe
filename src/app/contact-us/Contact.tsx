"use client";

import React from "react";
import { StyledHeadingH3 } from "../components/TextComponents";
import styled from "styled-components";
import { Button } from "../components/Button";

const Contact = () => {
  return (
    <StyledSection>
      <StyledHeadingH3>Contact Us</StyledHeadingH3>
      <p>
        We&#39;d love to hear from you! Whether you have a question about
        features, pricing, need a demo, or anything else — our team is ready to
        answer all your questions.
      </p>

      <StyledForm>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <Button type="submit" title="Submit Your Query" submitButton />
      </StyledForm>

      <StyledP>
        <span>Email:</span> support@yourdomain.com
      </StyledP>
      <StyledP>
        <span>Phone:</span> +91-XXXX-XXXXXX
      </StyledP>
      <StyledP>
        <span>Working Hours:</span> Mon–Fri, 9 AM to 6 PM
      </StyledP>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 32px 80px;
  text-align: center;

  & h3 {
    margin-bottom: 12px;
  }
  & p {
    font-size: 20px;
    line-height: 28px;
  }

  @media (max-width: 991px) {
    padding: 32px 0;
  }
`;

const StyledP = styled.p`
  font-size: 16px !important;
  line-height: 22px !important;
  border-bottom: 1px solid #ddd;
  max-width: max-content;
  padding-bottom: 4px;
  margin: 0 auto 6px auto;
  & span {
    font-weight: 600;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 18px;
  margin: 24px auto;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 460px) {
    max-width: 300px;
  }

  & input,
  textarea {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #e1e4e8;
  }
`;

export { Contact };
