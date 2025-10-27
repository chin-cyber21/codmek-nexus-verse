import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus, Box, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export const Scene3D = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.15;
      sphereRef.current.rotation.z = time * 0.25;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.y = time * 0.4;
      boxRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#666666" />

      {/* Floating geometric shapes */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Torus
          ref={torusRef}
          args={[1.2, 0.3, 16, 100]}
          position={[-3, 1, -2]}
        >
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
        <Sphere
          ref={sphereRef}
          args={[0.8, 64, 64]}
          position={[3, -1, -1]}
        >
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.2}
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <Box
          ref={boxRef}
          args={[1, 1, 1]}
          position={[0, 2, -3]}
        >
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.12}
            distort={0.2}
            speed={1.8}
            roughness={0.3}
            metalness={0.7}
          />
        </Box>
      </Float>

      {/* Wireframe geometries for additional depth */}
      <Torus args={[2, 0.1, 16, 100]} position={[2, -2, -4]} rotation={[Math.PI / 4, 0, 0]}>
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.1} transparent />
      </Torus>

      <Sphere args={[1.5, 32, 32]} position={[-2, 0, -5]}>
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.08} transparent />
      </Sphere>
    </>
  );
};
