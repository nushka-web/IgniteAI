"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypeAnimationProps {
  sequence: (string | number)[];
  wrapper?: keyof React.JSX.IntrinsicElements;
  repeat?: number | boolean;
  speed?: number;
  className?: string;
}

export function TypeAnimation({
  sequence,
  wrapper = "div",
  repeat = false,
  speed = 50,
  className,
}: TypeAnimationProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index >= sequence.length) {
      if (repeat) {
        setIndex(0);
        setSubIndex(0);
        setIsDeleting(false);
      }
      return;
    }

    const currentItem = sequence[index];
    
    if (typeof currentItem === "number") {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
        setIsDeleting(true);
      }, currentItem);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        const timeout = setTimeout(() => {
          setText(currentItem.substring(0, subIndex - 1));
          setSubIndex((prev) => prev - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      }
    } else {
      if (subIndex === currentItem.length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText(currentItem.substring(0, subIndex + 1));
          setSubIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }
  }, [sequence, index, subIndex, isDeleting, speed, repeat]);

  const displayText = text + (isDeleting ? "" : "▊");

  const Wrapper = wrapper as keyof React.JSX.IntrinsicElements;
  
  return React.createElement(Wrapper, { className: cn(className) }, displayText);
}