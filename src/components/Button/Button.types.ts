import { ReactNode } from "react";

export type ButtonProps = {
  onClick?: () => void;
  type?: "submit" | "button";
  text: string;
  icon?: ReactNode;
  fullScreen?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export type ButtonStylesProps = {
  fullScreen: boolean;
};
