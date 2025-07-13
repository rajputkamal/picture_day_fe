"use client";

import React from "react";
import styled from "styled-components";

import { SectionLayout } from "./SectionLayout";
import { StyledHeadingH3 } from "./TextComponents";
import { Card } from "./Card";

const Testimonial = () => {
  return (
    <StyledSection>
      <StyledHeadingH3>People in the Community Are Speaking</StyledHeadingH3>
      <SectionLayout>
        <StyledCard className="card-1">
          <Card />
        </StyledCard>
        <StyledCard className="card-2">
          <Card />
        </StyledCard>
        <StyledCard className="card-3">
          <Card />
        </StyledCard>
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

const StyledCard = styled.div`
  grid-column: span 4;

  @media (max-width: 1347px) and (min-width: 992px) {
    &:nth-child(1),
    &:nth-child(2) {
      grid-column: span 6;
    }

    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 991px) {
    grid-column: span 12;
  }
`;

export { Testimonial };
