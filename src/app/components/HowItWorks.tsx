"use client";
import React from "react";
import styled from "styled-components";
import { StyledHeadingH3 } from "./TextComponents";
import { SectionLayout } from "./Layout";

const HowItWorks = () => {
  return (
    <StyledSection>
      <StyledHeadingH3>How It Works</StyledHeadingH3>
      <SectionLayout>
        <StyledStepSection>
          <h4>Step 1:</h4>
          <p>
            Book a Shoot – &quot;Schools can schedule a professional photoshoot
            with just a few clicks.&quot;
          </p>
        </StyledStepSection>
        <StyledStepSection>
          <h4>Step 2:</h4>
          <p>
            View Photos – &quot;Parents and students can securely access their
            pictures online.&quot;
          </p>
        </StyledStepSection>
        <StyledStepSection>
          <h4>Step 3:</h4>
          <p>
            Order Prints – &quot;Get high-quality prints delivered to your
            doorstep.&quot;
          </p>
        </StyledStepSection>
      </SectionLayout>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 32px 80px;

  & h3 {
    margin-bottom: 32px;
    @media (max-width: 991px) {
      text-align: center;
    }
  }

  @media (max-width: 991px) {
    padding: 32px 0;
  }
`;

const StyledStepSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: span 12;
  color: black;
  padding-bottom: 12px;
  border-bottom: 1px solid #ccc;
  & h4 {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export { HowItWorks };
