import styled, { css } from "styled-components";
import { ButtonStylesProps } from "./Button.types";

export const Button = styled.button<ButtonStylesProps>`
  width: 100%;
  margin-top: 10px;
  ${({ fullScreen }) => css`
    max-width: ${fullScreen ? "100%" : "300px"};
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-family: var(--font-raleway);
  padding: 10px;
  background: transparent;
  border: 2px solid #000040;
  color: #000040;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:hover {
    transition: 0.3s all ease;
    cursor: pointer;
    background: #000040;
    border: 2px solid transparent;
    color: #fff;
  }
`;
