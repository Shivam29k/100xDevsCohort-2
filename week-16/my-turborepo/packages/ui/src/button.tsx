"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = () => {
  return <button> Hello this is the button we are talking about</button>;
};
