import { ReactNode, useEffect, useRef } from "react";

interface IInertProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

export default function Inert({ children, isActive, className }: IInertProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.inert = isActive;
  }, [isActive]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
