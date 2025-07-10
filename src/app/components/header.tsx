"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled, { css } from "styled-components";

import { PictureDayLogo } from "./picture-day-logo";
import { Navbar } from "./navbar";
import { Button } from "./Button";
import { Avatar } from "./Avatar";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToBooking = () => {
    router.push("/form");
  };

  return (
    <StyledHeader isScrolled={isScrolled}>
      <StyledLeftSection>
        <PictureDayLogo />
        <Navbar />
      </StyledLeftSection>
      <StyledHeaderRightSection>
        <Button title="Book a Photoshoot" onClick={navigateToBooking} />
        {/* //TODO:: Login-Logout functionality */}
        {/* <hr />
        <Avatar loggedInUser /> */}
      </StyledHeaderRightSection>
    </StyledHeader>
  );
};

interface StyledHeaderProps {
  isScrolled: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  border-bottom: 1px solid #ddd;
  transition: border-bottom 0.3s ease;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      border-bottom: 1px solid #ddd;
    `}
`;

const StyledLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeaderRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
  hr {
    height: 46px;
  }
  img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    cursor: pointer;
  }
`;

export { Header };
