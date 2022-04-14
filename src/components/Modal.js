import React from "react";
import styled from "styled-components";
import ReactDom from "react-dom";

export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <CustomModal>{children}</CustomModal>
    </>,
    document.getElementById("portal")
  );
}

const CustomModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
