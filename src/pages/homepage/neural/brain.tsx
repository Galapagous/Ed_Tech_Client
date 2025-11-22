// components/BrainNetwork.tsx
import { useMemo, useRef } from 'react';
import { Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';

type NodePoint = {
  position: [number, number, number];
  connections: number[];
};

export default function BrainNetwork() {
  const groupRef = useRef<Group>(null!);

  // Generate brain-shaped nodes
  const nodes = useMemo<NodePoint[]>(() => {
    const points: NodePoint[] = [];

    const isInsideBrain = (x: number, y: number, z: number) => {
      const a = x * x + y * y + z * z + 0.5 * x * y + 0.3 * y * z;
      return a < 2.2; // radius control
    };

    for (let i = 0; i < 250; i++) {
      let x = (Math.random() - 0.5) * 4;
      let y = (Math.random() - 0.5) * 3;
      let z = (Math.random() - 0.5) * 3;

      if (!isInsideBrain(x, y, z)) continue;

      points.push({
        position: [x, y, z],
        connections: [],
      });
    }

    // Connect nodes
    points.forEach((p, i) => {
      points.forEach((q, j) => {
        if (i === j) return;

        const v1 = new Vector3(...p.position);
        const v2 = new Vector3(...q.position);
        const dist = v1.distanceTo(v2);

        if (dist < 0.8 && Math.random() > 0.7) {
          p.connections.push(j);
        }
      });
    });

    return points;
  }, []);

  // Random pulse state
  const pulses = useMemo(() => {
    return new Array(20).fill(null).map(() => ({
      progress: Math.random(),
      speed: 0.01 + Math.random() * 0.02,
      path: generateRandomPath(),
    }));
  }, [nodes]);

  function generateRandomPath() {
    const path: [number, number, number][] = [];

    const start = nodes[Math.floor(Math.random() * nodes.length)];
    path.push(start.position);

    let current = start;

    for (let i = 0; i < 5; i++) {
      if (current.connections.length === 0) break;
      const nextId = current.connections[Math.floor(Math.random() * current.connections.length)];
      current = nodes[nextId];
      path.push(current.position);
    }

    return path;
  }

  useFrame(() => {
    if (!groupRef.current) return;

    // Rotate the brain
    groupRef.current.rotation.y += 0.003;

    // Update pulses
    pulses.forEach(pulse => {
      pulse.progress += pulse.speed;
      if (pulse.progress > 1) {
        pulse.progress = 0;
        pulse.path = generateRandomPath();
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Brain node particles */}
      {nodes.map((n, i) => (
        <mesh key={i} position={n.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial emissive={'#00eaff'} emissiveIntensity={1} color={'#00eaff'} />
        </mesh>
      ))}

      {/* Brain links */}
      {nodes.map((n, i) =>
        n.connections.map((c, j) => (
          <Line
            key={`${i}-${j}`}
            points={[n.position, nodes[c].position]}
            color="#00eaff"
            opacity={0.15}
            transparent
            lineWidth={0.5}
          />
        ))
      )}

      {/* Electrical pulses */}
      {pulses.map((pulse, i) => {
        const segmentCount = pulse.path.length - 1;
        const total = segmentCount;
        const index = Math.min(Math.floor(pulse.progress * total), segmentCount - 1);

        const start = pulse.path[index];
        const end = pulse.path[index + 1];

        const t = pulse.progress * total - index;

        const pos: [number, number, number] = [
          start[0] + (end[0] - start[0]) * t,
          start[1] + (end[1] - start[1]) * t,
          start[2] + (end[2] - start[2]) * t,
        ];

        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial emissive="#ff0077" color="#ff0077" emissiveIntensity={3} />
          </mesh>
        );
      })}
    </group>
  );
}
