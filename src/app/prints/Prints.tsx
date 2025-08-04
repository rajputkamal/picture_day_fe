"use client";

import React from "react";
import { StyledHeadingH3 } from "../components/TextComponents";
import styled from "styled-components";

const Print = () => {
  return (
    <StyledSection>
      <StyledHeadingH3>Order Prints</StyledHeadingH3>
      <p>Hang tight! We are working on your prints.</p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 32px 80px;
  text-align: center;

  & h3 {
    margin-bottom: 12px;
  }

  @media (max-width: 991px) {
    padding: 32px 0;
  }
`;

export { Print };
