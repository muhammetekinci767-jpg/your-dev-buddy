import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/logo.glb");
  const ref = useRef<THREE.Group>(null);

  // Metalik materyal uygula
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.material = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 1,
        roughness: 0.15,
        envMapIntensity: 2.5,
      });
      mesh.castShadow = true;
    }
  });

  // Sürekli Y ekseni etrafında döndür
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
    }
  });

  return <primitive ref={ref} object={scene} scale={1} />;
}

export default function Logo3D() {
  return (
    <div className="h-10 w-10 flex-shrink-0">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Işıklar */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#aaaaff" />
        <pointLight position={[0, 2, 2]} intensity={1} color="#ffffff" />

        {/* Environment map — metalik parıltı için şart */}
        <Environment preset="studio" />

        {/* Hafif gölge zemini */}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.25}
          scale={3}
          blur={2}
          far={2}
        />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

// GLB'yi preload et — navbar açılırken gecikme olmasın
useGLTF.preload("/logo.glb");
