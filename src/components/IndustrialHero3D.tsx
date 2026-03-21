import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line, Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ─── Orbiting Camera Ray ─── */
const OrbitingRay = ({ index, total }: { index: number; total: number }) => {
  const ref = useRef<THREE.Group>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 3.2;
  const speed = 0.15 + index * 0.02;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + angle;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.6) * 1.2,
      Math.sin(t) * radius
    );
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref}>
      {/* Camera node */}
      <mesh>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
      {/* Ray line to center */}
      <Line
        points={[
          [0, 0, 0],
          [-ref.current?.position.x || 0, -ref.current?.position.y || 0, -ref.current?.position.z || 0],
        ]}
        color="#ffffff"
        lineWidth={0.5}
        transparent
        opacity={0.08}
      />
    </group>
  );
};

/* ─── Orbiting Ray with dynamic line ─── */
const DynamicRay = ({ index, total }: { index: number; total: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<any>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 3.0 + (index % 3) * 0.5;
  const speed = 0.12 + index * 0.025;
  const yAmp = 0.8 + (index % 2) * 0.6;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * speed + angle;
    const x = Math.cos(t) * radius;
    const y = Math.sin(t * 0.5) * yAmp;
    const z = Math.sin(t) * radius;
    groupRef.current.position.set(x, y, z);
    groupRef.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[0.06, 0]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

/* ─── Sensor Node ─── */
const SensorNode = ({ index }: { index: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const r = 1.8 + (index % 4) * 0.4;
  const speed = 0.08 + index * 0.015;
  const offset = index * 1.3;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * r,
      Math.sin(t * 1.3) * 0.8,
      Math.sin(t) * r
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
    </mesh>
  );
};

/* ─── Scan Beam ─── */
const ScanBeam = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.4) * 2.5;
    ref.current.rotation.y = t * 0.3;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.03 + Math.sin(t * 0.8) * 0.02;
  });

  return (
    <mesh ref={ref as any}>
      <planeGeometry args={[0.08, 6]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.04}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

/* ─── Connecting Lines from center to rays ─── */
const ConnectionLines = ({ count }: { count: number }) => {
  const linesRef = useRef<THREE.Group>(null);
  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const r = 3.0 + (i % 3) * 0.5;
      return new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r);
    });
  }, [count]);

  useFrame((state) => {
    if (!linesRef.current) return;
    const t = state.clock.getElapsedTime();
    linesRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Line;
      if (mesh.geometry) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 0.12 + i * 0.025;
        const r = 3.0 + (i % 3) * 0.5;
        const yAmp = 0.8 + (i % 2) * 0.6;
        const ct = t * speed + angle;
        const pos = mesh.geometry.attributes.position;
        if (pos) {
          pos.setXYZ(1, Math.cos(ct) * r, Math.sin(ct * 0.5) * yAmp, Math.sin(ct) * r);
          pos.needsUpdate = true;
        }
      }
    });
  });

  return (
    <group ref={linesRef}>
      {positions.map((_, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, 1, 0, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.06} />
        </line>
      ))}
    </group>
  );
};

/* ─── Particle Field ─── */
const ParticleField = ({ count = 200 }: { count?: number }) => {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

/* ─── Main Scene ─── */
export const IndustrialHero3D = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  const coreRef = useRef<THREE.Mesh>(null);

  const rayCount = isMobile ? 4 : 8;
  const sensorCount = isMobile ? 6 : 12;

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      coreRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />

      {/* Central wireframe structure */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Inner wireframe */}
      <mesh rotation={[0.5, 0.3, 0]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </mesh>

      {/* Orbiting camera rays */}
      {Array.from({ length: rayCount }, (_, i) => (
        <DynamicRay key={`ray-${i}`} index={i} total={rayCount} />
      ))}

      {/* Connection lines from center to rays */}
      <ConnectionLines count={rayCount} />

      {/* Sensor nodes */}
      {Array.from({ length: sensorCount }, (_, i) => (
        <SensorNode key={`sensor-${i}`} index={i} />
      ))}

      {/* Scan beams */}
      <ScanBeam />
      <ScanBeam />

      {/* Particle field - desktop only */}
      {!isMobile && <ParticleField count={150} />}

      {/* Auto-rotate orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

export default IndustrialHero3D;
