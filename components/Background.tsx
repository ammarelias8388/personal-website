"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";

function Stars() {
  const ref = useRef<any>(null);

  const [positions] = useState(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // 🌌 حركة تلقائية (مضبوطة)
      ref.current.rotation.x += delta * 0.01;
      ref.current.rotation.y += delta * 0.01;

      // 🎮 حركة ماوس (واضحة)
      //ref.current.rotation.x += state.pointer.y * 0.008;
      //ref.current.rotation.y += state.pointer.x * 0.008;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#e5e7eb"
        size={0.008}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "auto",
      }}
    >
      <color attach="background" args={["black"]} />
      <Stars />
    </Canvas>
  );
}