'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sphere, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

const GoldParticles = dynamic(() => import('./gold-particles').then(mod => mod.GoldParticles), { ssr: false });

interface HeroSceneProps {
  mousePosition: { normalizedX: number; normalizedY: number };
  scrollProgress: number;
}

function ProductSphere({
  position,
  color,
  speed,
  distort = 0.3,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere args={[0.8, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ProductBox({
  position,
  color,
  size = [1, 1.4, 0.3],
  speed = 1.5,
}: {
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={2}>
      <RoundedBox args={size} radius={0.08} smoothness={4} position={position}>
        <meshPhysicalMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </RoundedBox>
    </Float>
  );
}

function Bottle({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <group position={position}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.3, 1.5, 32]} />
          <meshPhysicalMaterial
            color={color}
            metalness={0.1}
            roughness={0.1}
            transmission={0.6}
            thickness={0.5}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ mousePosition, scrollProgress }: HeroSceneProps) {
  return (
    <>
      <ambientLight intensity={0.2} />

      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#D6A758"
        castShadow
      />

      <spotLight
        position={[-5, 3, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#A8D96B"
      />

      <pointLight position={[0, 0, 5]} intensity={0.5} color="#FFF" />

      <Environment preset="city" />

      <GoldParticles count={150} />

      {/* Chifles Bag */}
      <ProductBox
        position={[-3, 1, 0]}
        color="#F4C542"
        size={[1.2, 1.6, 0.4]}
        speed={1.2}
      />

      {/* Papitas */}
      <ProductBox
        position={[3, 0.5, -1]}
        color="#E85D04"
        size={[1, 1.5, 0.5]}
        speed={1.8}
      />

      {/* Bebidas - Bottles */}
      <Bottle position={[-1.5, 1.2, 1]} color="#00A8E8" />
      <Bottle position={[0, -0.8, 0.5]} color="#E91E63" />

      {/* Alfajores */}
      <ProductBox
        position={[1.8, -0.5, 0]}
        color="#8B4513"
        size={[0.8, 0.8, 0.5]}
        speed={2}
      />

      {/* Licores */}
      <ProductSphere position={[-2, -0.8, -2]} color="#4A0E4E" speed={1} distort={0.2} />

      {/* Marcianos */}
      <ProductSphere position={[2.5, 1.8, -0.5]} color="#FF6B6B" speed={1.5} distort={0.4} />

    </>
  );
}

export function HeroScene({ mousePosition, scrollProgress }: HeroSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <Scene mousePosition={mousePosition} scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
