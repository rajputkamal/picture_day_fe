"use client";

import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import { StyledHeadingH3 } from "../components/TextComponents";
import { Button } from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import { FormFailure } from "../form/FormFailure";
import { FormSuccess } from "../form/FormSuccess";

const Contact = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<"success" | "failure" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitFeedback = (e: MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log("formData", userName, userEmail, message);

    const templateParams = {
      userName: userName,
      userEmail: userEmail,
      message: message,
    };

    emailjs
      .send(
        "service_x50zaq2",
        "template_svtiko9",
        templateParams,
        "MPC5OpLsba6hnVM3y"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setUserName("");
        setUserEmail("");
        setMessage("");
        setLoading(false);
        setStatus("success");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setLoading(false);
        setStatus("failure");
      });
  };
  return (
    <>
      <StyledSection>
        <StyledHeadingH3>Contact Us</StyledHeadingH3>
        <p>
          We&#39;d love to hear from you! Whether you have a question about
          features, pricing, need a demo, or anything else — our team is ready
          to answer all your questions.
        </p>

        <StyledForm id="feedback_form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button
            type="submit"
            title="Submit Your Query"
            submitButton
            onClick={handleSubmitFeedback}
          />
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
      {status === "success" && (
        <FormSuccess
          userName={userName}
          feedback={true}
          setStatus={setStatus}
        />
      )}
      {status === "failure" && <FormFailure setStatus={setStatus} />}
      {loading && <LoadingSpinner />}
    </>
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
