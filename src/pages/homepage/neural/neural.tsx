// components/NeuralNetwork.tsx
import { useMemo, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import Node from './node';
import Link from './link';

export default function NeuralNetwork() {
  const groupRef = useRef<Group>(null!);

  const nodes = useMemo(() => {
    return new Array(20).fill(null).map(() => ({
      position: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
    }));
  }, []);

  const links = useMemo(() => {
    const result = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < 0.15) {
          result.push([nodes[i].position, nodes[j].position]);
        }
      }
    }
    return result;
  }, [nodes]);

  useFrame(() => {
    groupRef.current.rotation.y += 0.002;
    groupRef.current.rotation.x += 0.0015;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} />
      ))}

      {links.map((link, i) => (
        <Link key={i} start={link[0]} end={link[1]} />
      ))}
    </group>
  );
}
