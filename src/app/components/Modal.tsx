"use client";

import React, { useState } from "react";
import styled from "styled-components";

type ModalProps = {
  children: React.ReactNode;
  setStatus?: (status: "success" | "failure" | null) => void;
};

const Modal = ({ children, setStatus }: ModalProps) => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const onClose = () => {
    setOpen(false);
    if (typeof setStatus === "function") {
      setStatus(null);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onClose}>&times;</CloseIcon>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

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
  width: 400px;
  max-width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 32px 32px 24px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 300px;
    max-width: 300px;
    height: 300px;
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
  opacity: 0.7;

  &:hover {
    color: #000;
    opacity: 1;
  }
`;

export { Modal };
