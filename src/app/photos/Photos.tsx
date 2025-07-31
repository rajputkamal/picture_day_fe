"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { StyledHeadingH3 } from "../components/TextComponents";

const imageGroups = [
  {
    date: "Apr 18, 2025",
    photos: [
      "https://images.unsplash.com/photo-1751273560917-2cfcc1b9826b?q=80&w=2330&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1750895103515-51ce20baf8b1?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1750378057935-ec216313425a?w=900&auto=format&fit=crop&q=60",
    ],
  },
  {
    date: "Apr 2, 2025",
    photos: [
      "https://images.unsplash.com/photo-1751369934560-580c550f5694?q=80&w=1364&auto=format&fit=crop",
    ],
  },
];

const Photos = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  return (
    <StyledSection>
      <StyledHeadingH3>My Photos</StyledHeadingH3>
      {imageGroups.map((group, index) => (
        <PhotoTimelineGroup key={index}>
          <TimelineLabel>
            <strong>{group.date}</strong> &mdash; {group.photos.length}{" "}
            {group.photos.length > 1 ? "photos" : "photo"}
          </TimelineLabel>
          <PhotoRow>
            {group.photos.map((src, i) => (
              <PhotoCard key={i}>
                <img src={src} alt={`photo-${i}`} />
              </PhotoCard>
            ))}
          </PhotoRow>
        </PhotoTimelineGroup>
      ))}

      {/* //TODO:: To be added later */}
      {previewSrc && (
        <ModalOverlay onClick={() => setPreviewSrc(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseIcon onClick={() => setPreviewSrc(null)}>&times;</CloseIcon>
            <img src={previewSrc} alt="Preview" />
          </ModalContent>
        </ModalOverlay>
      )}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 32px 80px;

  & h3 {
    margin-bottom: 24px;
    text-align: center;
  }

  @media (max-width: 991px) {
    padding: 32px 16px;
  }
`;

const PhotoTimelineGroup = styled.div`
  margin-bottom: 40px;
`;

const TimelineLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #444;
`;

const PhotoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PhotoCard = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    max-height: 280px;
    height: auto;
    width: auto;
    max-width: 100%;
    display: block;
    object-fit: contain;
  }
`;

// ✅ Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  width: auto;
  max-width: 80vw;
  height: 80vh;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 32px 32px 24px 32px; /* Add padding for icon and spacing */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #000;
  }
`;

export { Photos };
