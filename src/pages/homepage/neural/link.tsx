// components/Link.tsx
import { Line } from '@react-three/drei';

interface LinkProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}

export default function Link({ start, end, color = '#00eaff' }: LinkProps) {
  return <Line points={[start, end]} color={color} lineWidth={1} transparent opacity={0.4} />;
}
