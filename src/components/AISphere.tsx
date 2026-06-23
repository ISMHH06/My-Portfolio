import { Float, Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Nodes() {
  const group = useRef<THREE.Group>(null);
  const lines = useRef<THREE.LineSegments>(null);
  const { mouse } = useThree();

  const { positions, linePositions } = useMemo(() => {
    const count = 130;
    const vertices: number[] = [];
    const connectors: number[] = [];

    for (let i = 0; i < count; i += 1) {
      const phi = Math.acos(1 - 2 * (i / count));
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = 2.05 + Math.sin(i * 1.7) * 0.12;
      const x = Math.cos(theta) * Math.sin(phi) * radius;
      const y = Math.sin(theta) * Math.sin(phi) * radius;
      const z = Math.cos(phi) * radius;
      vertices.push(x, y, z);
    }

    for (let i = 0; i < count - 1; i += 1) {
      const current = i * 3;
      const next = ((i + 9) % count) * 3;
      connectors.push(vertices[current], vertices[current + 1], vertices[current + 2]);
      connectors.push(vertices[next], vertices[next + 1], vertices[next + 2]);
    }

    return {
      positions: new Float32Array(vertices),
      linePositions: new Float32Array(connectors),
    };
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.11;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.16, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -mouse.x * 0.12, 0.035);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.28}>
      <group ref={group}>
        <Points positions={positions} stride={3} frustumCulled>
          <PointMaterial transparent color="#7dd3fc" size={0.045} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
        </Points>
        <lineSegments ref={lines}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#8B5CF6" transparent opacity={0.22} blending={THREE.AdditiveBlending} />
        </lineSegments>
      </group>
    </Float>
  );
}

export function AISphere() {
  return (
    <Canvas camera={{ position: [0, 0, 6.2], fov: 42 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 2, 4]} intensity={10} color="#3B82F6" />
      <pointLight position={[-3, -1, 2]} intensity={8} color="#A855F7" />
      <Nodes />
    </Canvas>
  );
}
