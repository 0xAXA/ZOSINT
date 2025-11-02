'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
      ref.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00FFEE"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function GlobalParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles count={2000} />
      </Canvas>
    </div>
  );
}
