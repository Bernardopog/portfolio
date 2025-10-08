import { ReactNode, useEffect, useRef } from "react";

interface IInertProps {
  children: ReactNode;
  isVisible: boolean;
  className?: string;
}

export default function Inert({ children, isVisible, className }: IInertProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.inert = !isVisible;
  }, [isVisible]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
