"use client";

import { PropsWithChildren, useEffect } from "react";
import { Canvas, addEffect } from "@react-three/fiber";
import Lenis from "lenis";

type SceneProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export default function Scene({ children, ...props }: SceneProps) {
  // Use lenis to control scrolling
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, syncTouch: true });
    const removeEffect = addEffect((time) => lenis.raf(time));

    return () => {
      lenis.destroy();
      removeEffect();
    };
  }, []);

  return (
    <>
      <Canvas shadows {...props} eventPrefix="client">
        {children}
      </Canvas>
    </>
  );
}
