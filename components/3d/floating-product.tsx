'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingProductProps {
  position: [number, number, number];
  color: string;
  label: string;
  size?: number;
  rotationSpeed?: number;
  floatIntensity?: number;
  mousePosition: { normalizedX: number; normalizedY: number };
}

export function FloatingProduct({
  position,
  color,
  label,
  size = 1,
  rotationSpeed = 0.5,
  floatIntensity = 1,
  mousePosition,
}: FloatingProductProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;

    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.x = time * rotationSpeed * 0.3;
    meshRef.current.rotation.y = time * rotationSpeed * 0.5;

    groupRef.current.position.x = position[0] + mousePosition.normalizedX * 0.5;
    groupRef.current.position.y = position[1] + mousePosition.normalizedY * 0.3;

    if (hovered) {
      meshRef.current.scale.setScalar((size * 1.2));
    } else {
      meshRef.current.scale.setScalar(size);
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={floatIntensity}
    >
      <group ref={groupRef} position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <RoundedBox args={[size * 1.5, size * 2, size * 0.5]} radius={0.1} smoothness={4}>
            <meshPhysicalMaterial
              color={color}
              metalness={0.2}
              roughness={0.3}
              clearcoat={0.8}
              clearcoatRoughness={0.2}
              envMapIntensity={1}
            />
          </RoundedBox>
        </mesh>

        {hovered && (
          <Text
            position={[0, -size * 1.5, 0]}
            fontSize={0.3}
            color="#D6A758"
            anchorX="center"
            anchorY="middle"
          >
            {label}
          </Text>
        )}

        <pointLight
          position={[0, size * 2, size]}
          intensity={hovered ? 1.5 : 0.5}
          color="#D6A758"
          distance={5}
        />
      </group>
    </Float>
  );
}
