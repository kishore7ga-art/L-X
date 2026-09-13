import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TunnelProps {
  speed?: number;
  neonColor?: string;
}

const TunnelMesh: React.FC<{ speed: number; neonColor: string }> = ({ speed, neonColor }) => {
  const ringsRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const ringCount = 40;
  const ringSpacing = 3.5;
  const totalLength = ringCount * ringSpacing;

  // Generate warp particle positions
  const particleCount = 1200;
  const [particlePositions, particleColors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const c1 = new THREE.Color(neonColor);
    const c2 = new THREE.Color('#9d00ff');

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 5.0;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = -Math.random() * totalLength;

      const mix = Math.random();
      const mixedColor = c1.clone().lerp(c2, mix);
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [neonColor, totalLength]);

  useFrame((state, delta) => {
    const movement = delta * speed * 25;

    // Animate rings
    if (ringsRef.current) {
      ringsRef.current.children.forEach((child) => {
        child.position.z += movement;
        if (child.position.z > 5) {
          child.position.z -= totalLength;
        }
        child.rotation.z += delta * 0.2;
      });
    }

    // Animate particles
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 2] += movement * 1.5;
        if (positions[i * 3 + 2] > 5) {
          positions[i * 3 + 2] -= totalLength;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <>
      {/* Fog for depth immersion */}
      <fog attach="fog" args={['#030308', 5, 80]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} color={neonColor} distance={30} />

      {/* Rings */}
      <group ref={ringsRef}>
        {Array.from({ length: ringCount }).map((_, i) => {
          const isHex = i % 2 === 0;
          const zPos = -i * ringSpacing;
          return (
            <group key={i} position={[0, 0, zPos]}>
              <mesh>
                <ringGeometry args={[3.8, 3.95, isHex ? 6 : 8]} />
                <meshBasicMaterial
                  color={i % 3 === 0 ? neonColor : i % 3 === 1 ? '#9d00ff' : '#0070f3'}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.7}
                />
              </mesh>
              {/* Outer faint glow ring */}
              <mesh>
                <ringGeometry args={[4.0, 4.05, isHex ? 6 : 8]} />
                <meshBasicMaterial
                  color={neonColor}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.25}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Warp Speed Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={particleColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};

export const NeonTunnel: React.FC<TunnelProps> = ({ speed = 1.0, neonColor = '#00F0FF' }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <TunnelMesh speed={speed} neonColor={neonColor} />
      </Canvas>
    </div>
  );
};
