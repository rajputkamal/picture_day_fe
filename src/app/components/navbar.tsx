"use client";

import React from "react";
import styled from "styled-components";

import { PictureDayLink } from "./picture-day-link";

const NAV_BAR_MENU = [
  { id: "/", name: "Home", link: "/" },
  { id: "/photos", name: "View Photos", link: "/photos" },
  { id: "/prints", name: "Order Prints", link: "/prints" },
  { id: "/contact", name: "Contact Us", link: "/contact-us" },
];

export const Navbar = () => {
  return (
    <NavContainer>
      <StyledUl>
        {NAV_BAR_MENU.map((item) => (
          <li key={item.id}>
            <PictureDayLink item={item} />
          </li>
        ))}
      </StyledUl>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: relative;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;
