import { useEffect, useRef, useState } from 'react';

/**
 * @description
 * hover 를 유무를 파악하기 위한 hooks
 * @example
 * const { ref, isHover } = useHover<HTMLDivElement>();
 */
export function useHover<T extends HTMLElement = HTMLElement>() {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return { ref, isHover };
}
