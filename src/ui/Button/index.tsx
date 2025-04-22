"use client";

import { ReactNode } from "react";

interface IButtonProps {
  label?: string;
  action: () => void;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  label,
  action,
  icon,
  className,
  ariaLabel,
}: IButtonProps) {
  return (
    <button
      {...(ariaLabel && { "aria-label": ariaLabel })}
      className={`${className ?? "btn-default btn-default-color"}`}
      onClick={() => action()}
    >
      {icon}
      {label}
    </button>
  );
}
