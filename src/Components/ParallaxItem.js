// Components==============
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
// =========================

const calculateMinHeight = (height, range) => {
  return height + height * range;
};

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

export default function ParallaxItem({ children }) {
  const range = 0.1;
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const { scrollY } = useViewportScroll();

  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3)
  };

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  );
  const ref = useRef();

  useLayoutEffect(() => {
    if (!ref.current) return null;
    const onResize = () => {
      setOffsetTop(ref.current.offsetTop);
      setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
    };

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <div style={{ minHeight }}>
      <motion.div initial={{ y: 0 }} style={{ y }} ref={ref}>
        {children}
      </motion.div>
    </div>
  );
}
