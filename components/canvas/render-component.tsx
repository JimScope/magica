import { OrbitControls, Stage, useGLTF } from "@react-three/drei"
type ModelProps = {
  model_url: string
}

export default function Model({ model_url }: ModelProps) {
  const { scene } = useGLTF(model_url)

  return (
    <>
      <Stage adjustCamera={1} intensity={0.5}>
        <primitive object={scene} />
      </Stage>
      <OrbitControls autoRotate />
    </>
  )
}
