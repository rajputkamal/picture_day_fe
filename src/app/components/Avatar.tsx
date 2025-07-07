"use client";

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type AvatarProps = {
  src?: string;
  loggedInUser?: boolean;
  onLogout?: () => void;
  initials?: string; // defaults to "KS" if not provided
};

const Avatar: React.FC<AvatarProps> = ({
  loggedInUser = false,
  onLogout,
  src= "https://cdn.prod.website-files.com/611970eeff02f896bda0d4f4/618425dfa6b01b0fffd8d3f8_Justin-G-Headshots.jpg",
  initials = "KS",
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (loggedInUser) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container ref={dropdownRef}>
      {src ? (
        <AvatarImage alt="User avatar" loading="lazy" src={src} onClick={handleToggle} />
      ) : (
        <InitialsCircle onClick={handleToggle}>{initials}</InitialsCircle>
      )}

      {dropdownOpen && (
        <Dropdown>
          <DropdownButton onClick={onLogout}>Logout</DropdownButton>
        </Dropdown>
      )}
    </Container>
  );
};

// Styled components

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  cursor: pointer;
`;

const InitialsCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

export { Avatar };
