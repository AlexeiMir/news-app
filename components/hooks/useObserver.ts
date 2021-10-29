import {
  RefObject,
  useEffect, useRef, 
} from 'react';

export const useObserver = (ref: RefObject<Element>, 
  canLoad: boolean, isLoading: boolean, callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const node = ref?.current;
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = function (entries:IntersectionObserverEntry[]) {  
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(node as Element);
  }, [isLoading, canLoad]);
};
