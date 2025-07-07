"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { PictureDayLink } from "./picture-day-link";
import { ChevronDown } from "lucide-react";

const NAV_BAR_MENU = [
  { id: "/", name: "Home", link: "/" },
  { id: "/photos", name: "View Photos", link: "/photos" },
  { id: "/prints", name: "Order Prints", link: "/prints" },
  { id: '/contact', name: "Contact Us", link: "/contact-us" },
];

export const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(1024);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  let visibleCount = NAV_BAR_MENU.length;
  if (windowWidth < 500) {
    visibleCount = 1;
  } else if (windowWidth < 600) {
    visibleCount = 2;
  } else if (windowWidth < 768) {
    visibleCount = 3;
  }
  const visibleItems = NAV_BAR_MENU.slice(0, visibleCount);
  const dropdownItems = NAV_BAR_MENU.slice(visibleCount);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <NavContainer>
      <StyledUl>
        {visibleItems.map((item) => (
          <li key={item.id}>
            <PictureDayLink item={item} />
          </li>
        ))}

        {dropdownItems.length > 0 && (
          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onClick={() => setDropdownOpen((prev) => !prev)}>
              <ChevronDown size={16} />
            </DropdownButton>

            {dropdownOpen && (
              <DropdownMenu>
                {dropdownItems.map((item) => (
                  <li key={item.id}>
                    <PictureDayLink item={item} />
                  </li>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        )}
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
`;

const DropdownContainer = styled.li`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 8px;
  margin: 0;
  min-width: 160px;
  z-index: 10;

  li {
    padding: 8px 12px;
    white-space: nowrap;
  }

  li:hover {
    background-color: black;
    color: white;
  }
`;
