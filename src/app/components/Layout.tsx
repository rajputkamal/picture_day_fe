"use client";

import React from "react";
import styled from "styled-components";

type SectionLayoutProps = {
  children: React.ReactNode;
  heroSection?: boolean;
};

const SectionLayout = ({ children, heroSection }: SectionLayoutProps) => {
  return (
    <StyledSection heroSection={heroSection}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section<{ heroSection?: boolean }>`
  background-color: ${(props) => (props.heroSection ? "black" : "white")};
  padding: 0 64px;
  margin: 0 auto;
  color: white;
  @media (max-width: 991px) {
    padding: 0 32px;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`;

export { SectionLayout };
