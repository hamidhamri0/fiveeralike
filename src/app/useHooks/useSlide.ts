import React, { useEffect, useRef, useState } from "react";

export default function useSlide() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const [currentElement, setCurrentElement] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [isLastElementVisible, setIsLastElementVisible] = useState(false);
  const [isFirstElementVisible, setIsFirstElementVisible] = useState(false);

  const [queue, setQueue] = useState<number[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    const firstElement = container?.firstElementChild;
    const lastElement =
      container?.firstElementChild?.childNodes[
        container?.firstElementChild?.childNodes.length - 1
      ];

    if (!container || !firstElement || !lastElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstElement) {
            setIsFirstElementVisible(entry.isIntersecting);
          }
          if (entry.target === lastElement) {
            setIsLastElementVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: container,
        rootMargin: "0px",
        threshold: [0.99], // Elements need to be fully visible
      },
    );

    observer.observe(firstElement);
    observer.observe(lastElement);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(firstElement);
      observer.unobserve(lastElement);
    };
  }, []);

  const scrollLeftHandler = (e: React.MouseEvent) => {
    if (currentElement == 0 || isScrolling) return;
    setIsScrolling(true);
    e.stopPropagation();
    if (scrollRef.current) {
      setCurrentElement((p) => Math.max(p - 1, 0));
      scrollRef.current.scrollBy({
        left: -queue.pop() || 0,
        behavior: "smooth",
      });
      setQueue((p) => [...p]);
      setIsLastElementVisible(false);
      const scrollEnd = function () {
        setIsScrolling(false);
        scrollRef.current?.removeEventListener("scrollend", scrollEnd);
      };
      scrollRef.current.addEventListener("scrollend", scrollEnd);
    }
  };

  const scrollRightHandler = (e: React.MouseEvent) => {
    if (isLastElementVisible || isScrolling) return;
    setIsScrolling(true);
    e.stopPropagation();
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const gap = Number(
        getComputedStyle(firstChild).gap.replace("px", "") || 0,
      );
      setCurrentElement((p) => p + 1);
      const childWidth =
        firstChild?.childNodes?.[currentElement]?.getBoundingClientRect()
          ?.width + gap;

      const remainingScrollWidth =
        scrollRef.current.scrollWidth -
        scrollRef.current.clientWidth -
        scrollRef.current.scrollLeft;

      const scrollByWidth =
        remainingScrollWidth > childWidth ? childWidth : remainingScrollWidth;

      scrollRef.current.scrollBy({
        left: scrollByWidth,
        behavior: "smooth",
      });
      setQueue((p) => {
        console.log([...p, scrollByWidth]);
        return [...p, scrollByWidth];
      });
      const scrollEnd = function () {
        setIsScrolling(false);
        scrollRef.current?.removeEventListener("scrollend", scrollEnd);
      };
      scrollRef.current.addEventListener("scrollend", scrollEnd);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x - startX; // Adjust scroll speed
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return {
    currentElement,
    isFirstElementVisible,
    isLastElementVisible,
    scrollRef,
    scrollLeftHandler,
    scrollRightHandler,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
  };
}
