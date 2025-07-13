"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

import HeroImage from "@/assets/picture_day_hero.png";
import { Button } from "./Button";
import { SectionLayout } from "./SectionLayout";
import { StyledHeadingH3 } from "./TextComponents";

const HeroSection = () => {
  const router = useRouter();

  const navigateToBooking = () => {
    router.push("/form");
  };
  return (
    <SectionLayout heroSection>
      <StyledLeftSection>
        <StyledHeadingH3>Picture Day</StyledHeadingH3>
        <p>
          Capture School Memories with Picture Day Effortlessly book school
          photoshoots, view your child&#39;s photos, and order prints all in one
          place.
        </p>
        <Button
          title="Book a Photoshoot"
          secondary
          onClick={navigateToBooking}
        />
      </StyledLeftSection>
      <StyledRightSection>
        <Image src={HeroImage} alt="picture_day_hero_image" />
      </StyledRightSection>
    </SectionLayout>
  );
};

const StyledLeftSection = styled.div`
  padding: 80px 0;
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & p {
    font-size: 20px;
    line-height: 28px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 991px) {
    align-items: center;
    text-align: center;
    padding: 32px 0;
  }
`;

const StyledRightSection = styled.div`
  align-self: flex-end;
  grid-column: 6 / span 7;
  padding-top: 40px;
  & img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    vertical-align: middle;
  }
  @media (max-width: 991px) {
    padding-top: 0;
  }
`;
export { HeroSection };
