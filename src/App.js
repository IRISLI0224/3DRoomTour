import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import model from "./assest/untitled.glb"

function Model(props) {
  const { scene } = useGLTF(model);
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
