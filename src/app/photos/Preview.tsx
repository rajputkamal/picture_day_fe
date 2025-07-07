"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";
import React from "react";

const PreviewPhoto = () => {
  const searchParams = useSearchParams();
  const src = searchParams.get("src");
  const router = useRouter();

  if (!src) return <Message>No image provided.</Message>;

  return (
    <FullViewContainer>
      <BackButton onClick={() => router.back()}>
        &larr; Back to photos
      </BackButton>
      <ImageWrapper>
        <img src={src} alt="Full View" />
      </ImageWrapper>
    </FullViewContainer>
  );
};

export { PreviewPhoto };

const FullViewContainer = styled.div`
  padding: 24px;
  text-align: center;
`;

const BackButton = styled.button`
  background: transparent;
  color: #333;
  border: none;
  font-size: 16px;
  margin-bottom: 24px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #000;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Message = styled.div`
  padding: 40px;
  text-align: center;
  color: #777;
`;
