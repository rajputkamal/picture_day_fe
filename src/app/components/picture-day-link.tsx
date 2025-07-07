"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

type Item = {
  id: string;
  name: string;
  link: string;
};

type PictureDayLinkProps = {
  item: Item;
};

const PictureDayLink = ({ item }: PictureDayLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === item.link;

  return (
    <StyledLink href={item.link} $active={isActive}>
      {item.name}
    </StyledLink>
  );
};

type StyledLinkProps = {
  $active: boolean;
};

const StyledLink = styled(Link)<StyledLinkProps>`
  padding: 6px 8px;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "black" : "transparent")};
  color: ${({ $active }) => ($active ? "white" : "black")};
  border-radius: ${({ $active }) => ($active ? "4px" : "0")};

  &:hover {
    background-color: black;
    color: white;
    border-radius: 4px;
  }
`;

export { PictureDayLink };
