"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Model({ ...props }) {
  const fileUrl = "/shiba/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const { scene } = useGLTF(fileUrl);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh} scale={2}>
      <primitive object={scene} />
      <OrbitControls />
    </mesh>
  );
}
