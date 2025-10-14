import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

interface PodProps {
  position: [number, number, number];
  color: string;
  shape: "sphere" | "box" | "torus";
  label: string;
  onClick: () => void;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const Pod = ({ position, color, shape, label, onClick, isHovered, onHover }: PodProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  const renderShape = () => {
    const material = (
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isHovered ? 0.5 : 0.2}
        transparent
        opacity={0.8}
        wireframe={false}
      />
    );

    switch (shape) {
      case "sphere":
        return <Sphere args={[1, 32, 32]}>{material}</Sphere>;
      case "box":
        return <Box args={[1.5, 1.5, 1.5]}>{material}</Box>;
      case "torus":
        return <Torus args={[1, 0.4, 16, 32]}>{material}</Torus>;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onClick={onClick}
          onPointerOver={() => onHover(true)}
          onPointerOut={() => onHover(false)}
        >
          {renderShape()}
        </mesh>
        
        {/* Glow effect */}
        <pointLight color={color} intensity={isHovered ? 2 : 1} distance={5} />
      </group>
    </Float>
  );
};

const CentralLogo = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 2, 0]}>
      <mesh>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <pointLight color="#00f0ff" intensity={3} distance={10} />
    </group>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00f0ff" transparent opacity={0.6} />
    </points>
  );
};

interface Studio3DProps {
  onPodClick: (podName: string) => void;
}

const Studio3D = ({ onPodClick }: Studio3DProps) => {
  const [hoveredPod, setHoveredPod] = useState<string | null>(null);

  const pods = [
    { name: "Reception", position: [-4, 0, 2] as [number, number, number], color: "#00f0ff", shape: "sphere" as const },
    { name: "Research", position: [4, 1, 0] as [number, number, number], color: "#8b5cf6", shape: "sphere" as const },
    { name: "Workshop", position: [0, -1, 4] as [number, number, number], color: "#00ff88", shape: "box" as const },
    { name: "Nexus", position: [-3, 1, -3] as [number, number, number], color: "#ff00ff", shape: "torus" as const },
    { name: "Learn", position: [3, 0, -4] as [number, number, number], color: "#ffaa00", shape: "box" as const },
  ];

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[0, 5, 0]} intensity={1} color="#00f0ff" />

        {/* Central Logo */}
        <CentralLogo />

        {/* Interactive Pods */}
        {pods.map((pod) => (
          <Pod
            key={pod.name}
            position={pod.position}
            color={pod.color}
            shape={pod.shape}
            label={pod.name}
            onClick={() => onPodClick(pod.name)}
            isHovered={hoveredPod === pod.name}
            onHover={(hovered) => setHoveredPod(hovered ? pod.name : null)}
          />
        ))}

        {/* Particles */}
        <Particles />

        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={20}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Studio3D;
