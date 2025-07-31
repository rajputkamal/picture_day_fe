"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled, { css } from "styled-components";

import { PictureDayLogo } from "./picture-day-logo";
import { Navbar } from "./navbar";
import { Button } from "./Button";
// import { Avatar } from "./Avatar";
import { X, Menu } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(1024);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToBooking = () => {
    router.push("/form");
    setMobileMenuOpen(false);
  };

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <StyledHeader isScrolled={isScrolled}>
        <StyledLeftSection>
          {windowWidth < 768 && (
            <HamburgerIcon onClick={toggleMenu}>
              <Menu size={24} />
            </HamburgerIcon>
          )}
          <LogoWrapper>
            <PictureDayLogo />
          </LogoWrapper>
          {windowWidth > 767 && <Navbar />}
        </StyledLeftSection>

        <StyledHeaderRightSection>
          <Button title="Book a Photoshoot" onClick={navigateToBooking} />
        </StyledHeaderRightSection>
      </StyledHeader>

      {mobileMenuOpen && <Backdrop onClick={closeMenu} />}

      <AsideMenu open={mobileMenuOpen}>
        <AsideTop>
          <PictureDayLogo />
          <CloseIcon onClick={closeMenu}>
            <X size={24} />
          </CloseIcon>
        </AsideTop>

        <Navbar />
        <Button title="Book a Photoshoot" onClick={navigateToBooking} />
      </AsideMenu>
    </>
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
`;

const HamburgerIcon = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 16px;

  @media (max-width: 767px) {
    display: block;
  }
`;

const LogoWrapper = styled.div`
  @media (max-width: 767px) {
    flex-grow: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const AsideMenu = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
  background: #fff;
  z-index: 1000;
  padding: 24px 16px;
  transform: translateX(${({ open }) => (open ? "0%" : "-100%")});
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AsideTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export { Header };
