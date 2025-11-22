// import { Canvas } from '@react-three/fiber';
// import { Suspense, useMemo, useRef, useState } from 'react';
// import { OrbitControls, Sphere } from '@react-three/drei';
// import { Group, Vector3, Color } from 'three';
// import { useFrame } from '@react-three/fiber';

// // Button component (simplified for demo)
// const Button = ({ text, type, shadow }) => (
//   <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-bold text-white hover:scale-105 transition-transform shadow-lg">
//     {text}
//   </button>
// );

// const IButtonType = { PRIMARY: 'primary' };

// // Enhanced Brain Network Component
// function BrainNetwork() {
//   const groupRef = useRef<Group>(null!);
//   const [hovered, setHovered] = useState(false);

//   // Generate brain-shaped nodes with better distribution
//   const nodes = useMemo(() => {
//     const points: any[] = [];

//     const isInsideBrain = (x: number, y: number, z: number) => {
//       const a = x * x + y * y + z * z + 0.5 * x * y + 0.3 * y * z;
//       return a < 2.5;
//     };

//     for (let i = 0; i < 300; i++) {
//       let x = (Math.random() - 0.5) * 4.5;
//       let y = (Math.random() - 0.5) * 3.5;
//       let z = (Math.random() - 0.5) * 3.5;

//       if (!isInsideBrain(x, y, z)) continue;

//       points.push({
//         position: [x, y, z],
//         connections: [],
//         pulsePhase: Math.random() * Math.PI * 2,
//       });
//     }

//     // Connect nodes with distance threshold
//     points.forEach((p, i) => {
//       points.forEach((q, j) => {
//         if (i === j) return;
//         const v1 = new Vector3(...p.position);
//         const v2 = new Vector3(...q.position);
//         const dist = v1.distanceTo(v2);

//         if (dist < 0.9 && Math.random() > 0.65) {
//           p.connections.push(j);
//         }
//       });
//     });

//     return points;
//   }, []);

//   // Multiple pulse systems for variety
//   const pulses = useMemo(() => {
//     return new Array(35).fill(null).map(() => ({
//       progress: Math.random(),
//       speed: 0.008 + Math.random() * 0.025,
//       path: [],
//       color: new Color().setHSL(Math.random() * 0.2 + 0.5, 1, 0.5),
//       intensity: 2 + Math.random() * 3,
//     }));
//   }, []);

//   function generateRandomPath() {
//     const path: [number, number, number][] = [];
//     const start = nodes[Math.floor(Math.random() * nodes.length)];
//     path.push(start.position);

//     let current = start;
//     const steps = 4 + Math.floor(Math.random() * 5);

//     for (let i = 0; i < steps; i++) {
//       if (current.connections.length === 0) break;
//       const nextId = current.connections[Math.floor(Math.random() * current.connections.length)];
//       current = nodes[nextId];
//       path.push(current.position);
//     }

//     return path;
//   }

//   // Initialize paths
//   pulses.forEach(pulse => {
//     pulse.path = generateRandomPath();
//   });

//   useFrame(state => {
//     if (!groupRef.current) return;

//     const time = state.clock.getElapsedTime();

//     // Slow rotation with slight wobble
//     groupRef.current.rotation.y = time * 0.15;
//     groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;

//     // Update pulses
//     pulses.forEach(pulse => {
//       pulse.progress += pulse.speed;
//       if (pulse.progress > 1) {
//         pulse.progress = 0;
//         pulse.path = generateRandomPath();
//         pulse.color.setHSL(Math.random() * 0.2 + 0.5, 1, 0.5);
//       }
//     });
//   });

//   return (
//     <group ref={groupRef}>
//       {/* Ambient glow sphere */}
//       <Sphere args={[3, 32, 32]} position={[0, 0, 0]}>
//         <meshBasicMaterial color="#001a33" transparent opacity={0.03} />
//       </Sphere>

//       {/* Brain nodes with pulsing effect */}
//       {nodes.map((n, i) => (
//         <PulsingNode key={i} position={n.position} phase={n.pulsePhase} />
//       ))}

//       {/* Neural connections */}
//       {nodes.map((n, i) =>
//         n.connections.map((c, j) => {
//           const start = new Vector3(...n.position);
//           const end = new Vector3(...nodes[c].position);
//           const mid = new Vector3().lerpVectors(start, end, 0.5);
//           const dist = start.distanceTo(end);

//           return (
//             <NeuralConnection
//               key={`${i}-${j}`}
//               start={n.position}
//               end={nodes[c].position}
//               opacity={0.12 + Math.random() * 0.08}
//             />
//           );
//         })
//       )}

//       {/* Electrical pulses */}
//       {pulses.map((pulse, i) => {
//         if (pulse.path.length < 2) return null;

//         const segmentCount = pulse.path.length - 1;
//         const index = Math.min(Math.floor(pulse.progress * segmentCount), segmentCount - 1);
//         const start = pulse.path[index];
//         const end = pulse.path[index + 1];
//         const t = pulse.progress * segmentCount - index;

//         const pos: [number, number, number] = [
//           start[0] + (end[0] - start[0]) * t,
//           start[1] + (end[1] - start[1]) * t,
//           start[2] + (end[2] - start[2]) * t,
//         ];

//         return (
//           <ElectricalPulse
//             key={i}
//             position={pos}
//             color={pulse.color}
//             intensity={pulse.intensity}
//             progress={pulse.progress}
//           />
//         );
//       })}
//     </group>
//   );
// }

// // Pulsing node component
// function PulsingNode({ position, phase }: { position: [number, number, number]; phase: number }) {
//   const meshRef = useRef<any>(null);

//   useFrame(state => {
//     if (!meshRef.current) return;
//     const time = state.clock.getElapsedTime();
//     const scale = 1 + Math.sin(time * 2 + phase) * 0.3;
//     meshRef.current.scale.setScalar(scale);
//   });

//   return (
//     <mesh ref={meshRef} position={position}>
//       <sphereGeometry args={[0.04, 12, 12]} />
//       <meshStandardMaterial emissive="#00ffff" emissiveIntensity={1.5} color="#00ffff" />
//     </mesh>
//   );
// }

// // Neural connection line
// function NeuralConnection({ start, end, opacity }: any) {
//   const points = useMemo(() => {
//     return [new Vector3(...start), new Vector3(...end)];
//   }, [start, end]);

//   return (
//     <line>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={points.length}
//           array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <lineBasicMaterial color="#00ddff" transparent opacity={opacity} />
//     </line>
//   );
// }

// // Electrical pulse with trail effect
// function ElectricalPulse({ position, color, intensity, progress }: any) {
//   return (
//     <group position={position}>
//       {/* Main pulse */}
//       <mesh>
//         <sphereGeometry args={[0.12, 16, 16]} />
//         <meshStandardMaterial emissive={color} color={color} emissiveIntensity={intensity} />
//       </mesh>

//       {/* Glow effect */}
//       <mesh>
//         <sphereGeometry args={[0.2, 16, 16]} />
//         <meshBasicMaterial color={color} transparent opacity={0.3} />
//       </mesh>
//     </group>
//   );
// }

// // Main Hero Component
// export default function Hero() {
//   return (
//     <div className="relative w-full lg:h-[80vh] h-[70vh] text-white overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

//       {/* 3D Brain Animation */}
//       <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-90">
//         <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.3} />
//             <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
//             <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
//             <BrainNetwork />
//             <OrbitControls enableZoom={false} enableRotate={false} autoRotate={false} />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Floating particles effect */}
//       <div className="absolute inset-0 opacity-30">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-20 lg:w-[45%] md:w-[60%] p-6 mt-20">
//         <h1 className="font-bold lg:text-[4rem] md:text-[3rem] text-[2.3rem] leading-tight drop-shadow-2xl animate-fade-in">
//           The Future of{' '}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//             Learning
//           </span>{' '}
//           is Here
//         </h1>

//         <p className="lg:font-semibold text-lg p-4 bg-black/50 backdrop-blur-md border-l-4 border-cyan-400 mt-6 md:w-2/3 shadow-2xl rounded-r-lg">
//           Upload and test your knowledge on your academic papers with AI-powered insights.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <Button text="View Plans" type={IButtonType.PRIMARY} shadow={false} />
//         </div>
//       </div>

//       {/* Bottom gradient fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
//     </div>
//   );
// }

// === v2 ===
import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Group, Vector3, Color } from 'three';
import { useFrame } from '@react-three/fiber';
import Button from '../../../components/atom/button/button';

// Button component (simplified for demo)
// const Button = ({ text, type, shadow }) => (
//   <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-bold text-white hover:scale-105 transition-transform shadow-lg">
//     {text}
//   </button>
// );

const IButtonType = { PRIMARY: 'primary' };

// Enhanced Brain Network Component with proper brain shape
function BrainNetwork() {
  const groupRef = useRef<Group>(null!);

  // Generate brain-shaped nodes with two hemispheres
  const nodes = useMemo(() => {
    const points: any[] = [];

    // Brain shape function - creates two hemispheres
    const isInsideBrain = (x: number, y: number, z: number) => {
      // Create two rounded lobes (hemispheres)
      const leftHemisphere = Math.pow(x + 0.8, 2) + Math.pow(y, 2) * 1.2 + Math.pow(z, 2) * 1.5;
      const rightHemisphere = Math.pow(x - 0.8, 2) + Math.pow(y, 2) * 1.2 + Math.pow(z, 2) * 1.5;

      // Cerebellum (back lower part)
      const cerebellum = Math.pow(x, 2) * 2 + Math.pow(y + 0.8, 2) + Math.pow(z + 1.2, 2) * 0.8;

      // Brain stem (bottom center)
      const brainStem = Math.pow(x, 2) * 4 + Math.pow(y + 1.2, 2) * 0.5 + Math.pow(z, 2) * 4;

      return leftHemisphere < 1.8 || rightHemisphere < 1.8 || cerebellum < 0.8 || brainStem < 0.3;
    };

    // Generate points within brain shape
    for (let i = 0; i < 350; i++) {
      let x = (Math.random() - 0.5) * 4;
      let y = (Math.random() - 0.5) * 3.5;
      let z = (Math.random() - 0.5) * 4;

      if (!isInsideBrain(x, y, z)) continue;

      // Determine region for different pulse behaviors
      const region = x < 0 ? 'left' : 'right';

      points.push({
        position: [x, y, z],
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
        region: region,
      });
    }

    // Connect nodes - prefer connections within same hemisphere
    points.forEach((p, i) => {
      points.forEach((q, j) => {
        if (i === j) return;
        const v1 = new Vector3(...p.position);
        const v2 = new Vector3(...q.position);
        const dist = v1.distanceTo(v2);

        // Higher probability for connections in same hemisphere
        const sameHemisphere = p.region === q.region;
        const threshold = sameHemisphere ? 0.75 : 0.6;
        const probability = sameHemisphere ? 0.7 : 0.85;

        if (dist < threshold && Math.random() > probability) {
          p.connections.push(j);
        }
      });
    });

    return points;
  }, []);

  // Multiple pulse systems
  const pulses = useMemo(() => {
    return new Array(40).fill(null).map(() => ({
      progress: Math.random(),
      speed: 0.006 + Math.random() * 0.02,
      path: [],
      color: new Color().setHSL(0.5 + Math.random() * 0.15, 1, 0.5),
      intensity: 2 + Math.random() * 3,
      trailLength: 3 + Math.floor(Math.random() * 4),
    }));
  }, []);

  function generateRandomPath() {
    if (nodes.length === 0) return [];

    const path: [number, number, number][] = [];
    const start = nodes[Math.floor(Math.random() * nodes.length)];
    path.push(start.position);

    let current = start;
    const steps = 5 + Math.floor(Math.random() * 6);

    for (let i = 0; i < steps; i++) {
      if (current.connections.length === 0) break;
      const nextId = current.connections[Math.floor(Math.random() * current.connections.length)];
      current = nodes[nextId];
      path.push(current.position);
    }

    return path;
  }

  // Initialize paths
  pulses.forEach(pulse => {
    pulse.path = generateRandomPath();
  });

  useFrame(state => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Gentle rotation
    groupRef.current.rotation.y = time * 0.12;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.08;

    // Update pulses
    pulses.forEach(pulse => {
      pulse.progress += pulse.speed;
      if (pulse.progress > 1) {
        pulse.progress = 0;
        pulse.path = generateRandomPath();
        pulse.color.setHSL(0.5 + Math.random() * 0.15, 1, 0.5);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Brain nodes with size variation for depth */}
      {nodes.map((n, i) => (
        <PulsingNode
          key={i}
          position={n.position}
          phase={n.pulsePhase}
          size={0.035 + Math.random() * 0.025}
        />
      ))}

      {/* Neural connections with varied opacity */}
      {nodes.map((n, i) =>
        n.connections.map((c, j) => {
          const start = n.position;
          const end = nodes[c].position;
          const isCrossHemisphere = n.region !== nodes[c].region;

          return (
            <NeuralConnection
              key={`${i}-${j}`}
              start={start}
              end={end}
              opacity={isCrossHemisphere ? 0.08 : 0.15}
              color={isCrossHemisphere ? '#00aaff' : '#00ffff'}
            />
          );
        })
      )}

      {/* Electrical pulses with trails */}
      {pulses.map((pulse, i) => {
        if (pulse.path.length < 2) return null;

        const segmentCount = pulse.path.length - 1;
        const index = Math.min(Math.floor(pulse.progress * segmentCount), segmentCount - 1);
        const start = pulse.path[index];
        const end = pulse.path[index + 1];
        const t = pulse.progress * segmentCount - index;

        const pos: [number, number, number] = [
          start[0] + (end[0] - start[0]) * t,
          start[1] + (end[1] - start[1]) * t,
          start[2] + (end[2] - start[2]) * t,
        ];

        return (
          <ElectricalPulse key={i} position={pos} color={pulse.color} intensity={pulse.intensity} />
        );
      })}
    </group>
  );
}

// Pulsing node component
function PulsingNode({ position, phase, size }: any) {
  const meshRef = useRef<any>(null);

  useFrame(state => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 2.5 + phase) * 0.4;
    meshRef.current.scale.setScalar(scale);

    // Vary intensity
    const intensity = 1.2 + Math.sin(time * 3 + phase) * 0.8;
    meshRef.current.material.emissiveIntensity = intensity;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial emissive="#00ffff" emissiveIntensity={1.5} color="#00ffff" />
    </mesh>
  );
}

// Neural connection line
function NeuralConnection({ start, end, opacity, color }: any) {
  const lineRef = useRef<any>(null);

  useFrame(state => {
    if (!lineRef.current) return;
    const time = state.clock.getElapsedTime();
    // Subtle opacity pulsing
    lineRef.current.material.opacity = opacity + Math.sin(time * 2) * 0.03;
  });

  const points = useMemo(() => {
    return [new Vector3(...start), new Vector3(...end)];
  }, [start, end]);

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
}

// Electrical pulse with glow
function ElectricalPulse({ position, color, intensity }: any) {
  const meshRef = useRef<any>(null);

  useFrame(state => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    // Pulsing effect
    const scale = 1 + Math.sin(time * 10) * 0.2;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <group position={position}>
      {/* Main pulse */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial emissive={color} color={color} emissiveIntensity={intensity} />
      </mesh>

      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>

      {/* Extended glow */}
      <mesh>
        <sphereGeometry args={[0.22, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Main Hero Component
export default function Hero() {
  return (
    <div className="relative w-full lg:h-[80vh] h-[70vh] text-white overflow-hidden bg-inherit">
      {/* Animated gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div> */}

      {/* 3D Brain Animation */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-90">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} intensity={0.6} color="#00ffff" />
            <pointLight position={[-5, -5, -5]} intensity={0.4} color="#0088ff" />
            <pointLight position={[0, 5, -5]} intensity={0.3} color="#00ddff" />
            <BrainNetwork />
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 lg:w-[45%] md:w-[60%] p-6 mt-20">
        <h1 className="font-bold lg:text-[4rem] md:text-[3rem] text-[2.3rem] leading-tight drop-shadow-2xl">
          The Future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 animate-pulse">
            Learning
          </span>{' '}
          is Here
        </h1>

        <p className="lg:font-semibold text-lg p-4 bg-black/50 backdrop-blur-md border-l-4 border-cyan-400 mt-6 md:w-2/3 shadow-2xl rounded-r-lg">
          Upload and test your knowledge on your academic papers with AI-powered insights.
        </p>

        <div className="mt-8 flex gap-4">
          <Button text="View Plans" type={IButtonType.PRIMARY} shadow={false} />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
}
