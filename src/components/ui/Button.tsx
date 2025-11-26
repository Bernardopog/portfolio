'use client';

import type { MouseEvent, ReactNode } from 'react';

interface IButtonProps {
  label?: string;
  action: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  title?: string;
}

export default function Button({
  label,
  action,
  icon,
  className,
  ariaLabel,
  disabled,
  title,
}: IButtonProps) {
  return (
    <button
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      {...((title || ariaLabel) && { title: title || ariaLabel })}
      className={`flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed ${
        className ?? 'btn-default btn-default-color'
      }`}
      onClick={(e) => action(e)}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
}
