"use client";

import React from "react";
import { CiLinkedin, CiFacebook, CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const d = new Date();
  return (
    <footer>
      <div className="icons_wrapper">
        <CiLinkedin />
        <FaInstagram />
        <CiYoutube />
        <CiFacebook />
        <FaXTwitter />
      </div>
      <div>{`© ${d.getFullYear()}  Picture Day, Inc. All Rights Reserved.`}</div>
    </footer>
  );
};

export { Footer };
