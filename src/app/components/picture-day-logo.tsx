"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "@/assets/logo.png";

const PictureDayLogo = () => {
  const router = useRouter();
  return (
    <StyledLogo>
      <Image
        src={Logo}
        alt="Picture_day"
        onClick={() => router.push("/")}
        width={100}
        height={100}
      />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  cursor: pointer;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export { PictureDayLogo };
