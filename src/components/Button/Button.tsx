"use client";

import { IoAddCircleSharp } from "react-icons/io5";
import * as S from "./Button.styles";

import { ButtonProps } from "./Button.types";

export function Button({
  onClick,
  text,
  icon,
  fullScreen = false,
  type = "button",
  isDisabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <>
      <S.Button
        onClick={onClick}
        fullScreen={fullScreen}
        type={type}
        disabled={isDisabled || isLoading}
      >
        {!isLoading && icon && icon}
        {isLoading ? "Aguarde ..." : text}
      </S.Button>
    </>
  );
}
