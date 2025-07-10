"use client";

import React from "react";
import styled from "styled-components";

import { Avatar } from "./Avatar";

const Card = () => {
  return (
    <StyledCard className="main_div">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat
        voluptates ut maxime voluptas eius cumque expedita recusandae. Nisi iste
        natus culpa est aliquid voluptate possimus beatae esse accusantium odit!
      </p>
      <StyledClientWrapper>
        <div className="testimonials1_client-image-wrapper">
         <Avatar />
        </div>
        <StyledClientDetails
          className="testimonials1_client-details"
          aria-hidden="true"
        >
          <div className="testimonial-name" aria-hidden="true">
            Robin &amp;&nbsp;Jennifer Janson
          </div>
          <div className="text-block-39" aria-hidden="true">
            Sock Monkey Photography
          </div>
        </StyledClientDetails>
      </StyledClientWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  max-width: 28rem;
  /* box-shadow: 0 20px 30px 0 #f8f8f8; */
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 0.25rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 16rem;
  min-height: 250px;
  padding: 2rem 1rem;
  display: flex;
  color: black;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
 
`;

const StyledClientWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledClientDetails = styled.div`
  display: flex;
`;

export { Card };
