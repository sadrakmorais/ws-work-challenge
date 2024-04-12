"use client";

import React from "react";
import { ModalProps } from "./Modal.types";
import * as S from "./Modal.styles";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    isOpen && (
      <S.Overlay>
        <S.ModalWrapper>
          <S.CloseButton onClick={onClose}>
            <IoCloseCircle size={22} />
          </S.CloseButton>
          {children}
        </S.ModalWrapper>
      </S.Overlay>
    )
  );
};

export default Modal;
