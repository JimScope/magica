import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

export default function Scene() {
  return (
    <div>
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [4, -1, 8], fov: 35 }}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
      >
        <ambientLight intensity={0.25} />
        <View.Port />
      </Canvas>
    </div>
  );
}
