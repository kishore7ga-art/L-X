import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CityProps {
  progress?: number;
}

const CityScene: React.FC<{ progress: number }> = ({ progress }) => {
  const cityGroup = useRef<THREE.Group>(null);
  const roadGrid = useRef<THREE.Mesh>(null);
  const beamsGroup = useRef<THREE.Group>(null);

  // Generate procedural buildings
  const buildings = useMemo(() => {
    const items = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const isLeft = i % 2 === 0;
      const x = isLeft ? -7 - Math.random() * 18 : 7 + Math.random() * 18;
      const z = -((i / 2) * 5) - Math.random() * 8;
      const width = 2.5 + Math.random() * 3.5;
      const depth = 2.5 + Math.random() * 3.5;
      const height = 12 + Math.random() * 26;
      const colorMix = Math.random();
      const edgeColor = colorMix > 0.6 ? '#00F0FF' : colorMix > 0.3 ? '#9d00ff' : '#0070f3';

      items.push({
        position: [x, height / 2 - 2, z] as [number, number, number],
        size: [width, height, depth] as [number, number, number],
        edgeColor,
        height,
      });
    }
    return items;
  }, []);

  // Floating ambient cyber embers
  const emberCount = 300;
  const [emberPositions] = useMemo(() => {
    const pos = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = Math.random() * 30;
      pos[i * 3 + 2] = -Math.random() * 120;
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (cityGroup.current) {
      // Gentle camera sway and forward drift
      cityGroup.current.position.z = (state.clock.elapsedTime * 4) % 15;
    }
    if (beamsGroup.current) {
      beamsGroup.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      <color attach="background" args={['#030308']} />
      <fog attach="fog" args={['#030308', 10, 90]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} color="#00f0ff" />
      <directionalLight position={[-10, 20, 5]} intensity={0.8} color="#9d00ff" />
      <pointLight position={[0, 4, -10]} intensity={2} color="#00f0ff" distance={40} />

      {/* City Road Ground with glowing wet tarmac reflections */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -40]} ref={roadGrid}>
        <planeGeometry args={[60, 160, 30, 80]} />
        <meshStandardMaterial
          color="#060914"
          roughness={0.15}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Cyberpunk Neon Road Centerlines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.98, -40]}>
        <planeGeometry args={[0.3, 160]} />
        <meshBasicMaterial color="#00F0FF" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3, -1.98, -40]}>
        <planeGeometry args={[0.1, 160]} />
        <meshBasicMaterial color="#9d00ff" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[3, -1.98, -40]}>
        <planeGeometry args={[0.1, 160]} />
        <meshBasicMaterial color="#9d00ff" transparent opacity={0.6} />
      </mesh>

      {/* Buildings */}
      <group ref={cityGroup}>
        {buildings.map((b, i) => (
          <group key={i} position={b.position}>
            {/* Building Body */}
            <mesh>
              <boxGeometry args={b.size} />
              <meshStandardMaterial
                color="#050814"
                roughness={0.3}
                metalness={0.85}
              />
            </mesh>
            {/* Glowing Wireframe Edge */}
            <mesh>
              <boxGeometry args={[b.size[0] * 1.01, b.size[1] * 1.01, b.size[2] * 1.01]} />
              <meshBasicMaterial
                color={b.edgeColor}
                wireframe
                transparent
                opacity={0.35}
              />
            </mesh>
            {/* Rooftop Beacon Light */}
            <mesh position={[0, b.height / 2 + 0.5, 0]}>
              <sphereGeometry args={[0.3, 8, 8]} />
              <meshBasicMaterial color={b.edgeColor} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Sky Beams / Searchlights */}
      <group ref={beamsGroup} position={[0, 0, -40]}>
        <mesh position={[-15, 10, 0]} rotation={[0, 0, 0.4]}>
          <cylinderGeometry args={[0.2, 3, 35, 8]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.12} />
        </mesh>
        <mesh position={[15, 10, -10]} rotation={[0, 0, -0.4]}>
          <cylinderGeometry args={[0.2, 3, 35, 8]} />
          <meshBasicMaterial color="#9d00ff" transparent opacity={0.12} />
        </mesh>
      </group>

      {/* Floating Cyber Embers */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={emberCount}
            array={emberPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#00F0FF"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};

export const CyberpunkCityCanvas: React.FC<CityProps> = ({ progress = 0 }) => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 65, near: 0.1, far: 150 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CityScene progress={progress} />
      </Canvas>
    </div>
  );
};
