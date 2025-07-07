"use client";
import React from 'react'
import styled from 'styled-components';
import Image from "next/image";
import Logo from "@/assets/logo.png";

const PictureDayLogo = () => {
  return (
    <StyledLogo>
    <Image
      src={Logo}
      className="lt-header-logo"
      alt="Lifetouch + Shutterfly"
      width={100}
      height={100}
      unoptimized
    />
  </StyledLogo>
  )
}

const StyledLogo = styled.div`
  cursor: pointer;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export {PictureDayLogo}