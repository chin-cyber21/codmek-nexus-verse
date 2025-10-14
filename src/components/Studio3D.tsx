import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Box, Octahedron, Dodecahedron } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import codmekLogo from "@/assets/codmek-logo.png";

interface PodProps {
  position: [number, number, number];
  shape: "sphere" | "box" | "octahedron" | "dodecahedron";
  label: string;
  onClick: () => void;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const Pod = ({ position, shape, label, onClick, isHovered, onHover }: PodProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
      if (isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  const material = (
    <meshPhysicalMaterial
      color="#ffffff"
      emissive="#ffffff"
      emissiveIntensity={isHovered ? 0.4 : 0.15}
      transparent
      opacity={0.2}
      wireframe
      metalness={1}
      roughness={0.05}
      clearcoat={1}
      clearcoatRoughness={0.1}
    />
  );

  const renderShape = () => {
    switch (shape) {
      case "sphere":
        return <Sphere args={[0.8, 64, 64]}>{material}</Sphere>;
      case "box":
        return <Box args={[1.2, 1.2, 1.2]}>{material}</Box>;
      case "octahedron":
        return <Octahedron args={[1, 2]}>{material}</Octahedron>;
      case "dodecahedron":
        return <Dodecahedron args={[0.9, 2]}>{material}</Dodecahedron>;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onClick={onClick}
          onPointerOver={() => onHover(true)}
          onPointerOut={() => onHover(false)}
        >
          {renderShape()}
        </mesh>
        <pointLight color="#ffffff" intensity={isHovered ? 1.5 : 0.5} distance={5} />
      </group>
    </Float>
  );
};

const CentralLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(TextureLoader, codmekLogo);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Logo plane with actual Codmek logo */}
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} transparent opacity={0.95} />
      </mesh>
      
      {/* Wireframe hexagon around logo */}
      <mesh rotation={[0, 0, 0]}>
        <octahedronGeometry args={[3, 1]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.4}
          metalness={1}
          roughness={0}
          clearcoat={1}
        />
      </mesh>

      {/* Inner rotating ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 32, 200]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0}
          clearcoat={1}
          reflectivity={1}
        />
      </mesh>

      <pointLight color="#ffffff" intensity={3} distance={15} decay={2} />
    </group>
  );
};

const AnimatedGrid = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 - 5;
      gridRef.current.rotation.y += 0.001;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[50, 50, "#ffffff", "#333333"]}
      position={[0, -5, 0]}
    />
  );
};

const WireframeNet = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[15, 64, 64]} />
      <meshPhysicalMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.08}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
};

interface Studio3DProps {
  onPodClick: (podName: string) => void;
}

const Studio3D = ({ onPodClick }: Studio3DProps) => {
  const [hoveredPod, setHoveredPod] = useState<string | null>(null);

  const pods = [
    { name: "Reception", position: [-5, 0, 2] as [number, number, number], shape: "octahedron" as const },
    { name: "Research", position: [5, 1, 0] as [number, number, number], shape: "dodecahedron" as const },
    { name: "Workshop", position: [0, -1, 5] as [number, number, number], shape: "box" as const },
    { name: "Nexus", position: [-4, 1, -4] as [number, number, number], shape: "sphere" as const },
    { name: "Learn", position: [4, 0, -5] as [number, number, number], shape: "octahedron" as const },
  ];

  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 3, 12], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        shadows
        dpr={[1, 2]}
      >
        <color attach="background" args={["#020202"]} />
        <fog attach="fog" args={["#020202", 10, 35]} />

        {/* Enhanced lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8} 
          color="#ffffff"
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight 
          position={[0, 0, 0]} 
          intensity={2} 
          color="#ffffff" 
          distance={25}
          decay={2}
        />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          castShadow
        />

        {/* Central Logo */}
        <CentralLogo />

        {/* Wireframe environments */}
        <WireframeNet />
        <AnimatedGrid />

        {/* Interactive Pods */}
        {pods.map((pod) => (
          <Pod
            key={pod.name}
            position={pod.position}
            shape={pod.shape}
            label={pod.name}
            onClick={() => onPodClick(pod.name)}
            isHovered={hoveredPod === pod.name}
            onHover={(hovered) => setHoveredPod(hovered ? pod.name : null)}
          />
        ))}

        {/* Enhanced Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={25}
          autoRotate
          autoRotateSpeed={0.25}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Studio3D;
