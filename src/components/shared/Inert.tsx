import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from 'react';

interface IInertProps {
  children: ReactNode;
  isVisible: boolean;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export default function Inert({
  children,
  isVisible,
  className,
  style,
  as: Tag = 'div',
}: IInertProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.inert = !isVisible;
  }, [isVisible]);

  return (
    <Tag ref={ref} className={className} style={style} aria-hidden={!isVisible}>
      {children}
    </Tag>
  );
}
