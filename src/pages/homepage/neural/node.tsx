// components/Node.tsx
import { useRef, type JSX } from 'react';
import { Mesh } from 'three';

type MeshProps = JSX.IntrinsicElements['mesh'];

interface NodeProps extends MeshProps {
  color?: string;
}

export default function Node({ color = '#00eaff', ...props }: NodeProps) {
  const ref = useRef<Mesh>(null!);

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={1} color={color} />
    </mesh>
  );
}
