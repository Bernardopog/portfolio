'use client';

import type { ReactNode } from 'react';

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
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      className={`flex items-center gap-2 ${
        className ?? 'btn-default btn-default-color'
      }`}
      onClick={() => action()}
    >
      {icon}
      {label}
    </button>
  );
}
