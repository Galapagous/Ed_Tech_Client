// // App.tsx
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import BrainNetwork from './brain';

// export default function Brain() {
//   return (
//     <div className="w-screen h-screen bg-black">
//       <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <BrainNetwork />
//         <OrbitControls enableZoom={false} />
//       </Canvas>
//     </div>
//   );
// }

// === v2 ===
// import Background from '../../../assets/image/pexels-cottonbro-6153738.jpg';
import Button, { IButtonType } from '../../../components/atom/button/button';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import BrainNetwork from './brain';

const Hero = () => {
  return (
    <div
      className="relative w-full lg:h-[80vh] h-[70vh] text-white overflow-hidden"
      //   style={{
      //     backgroundImage: `url(${Background})`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundPosition: 'center',
      //     backgroundSize: 'cover',
      //   }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>

      {/* 3D Brain Animation */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-85">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} />
            <BrainNetwork />
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 lg:w-[45%] md:w-[60%] p-6 mt-20">
        <h1 className="font-bold lg:text-[4rem] md:text-[3rem] text-[2.3rem] leading-tight drop-shadow-lg">
          The Future of Learning is Here
        </h1>

        <p className="lg:font-semibold text-lg p-3 bg-black/40 backdrop-blur-sm border-l-4 border-green-300 mt-4 md:w-2/3 shadow-sm">
          Upload and test your knowledge on your academic papers.
        </p>

        <div className="mt-6">
          <Button text="View Plan" type={IButtonType.PRIMARY} shadow={false} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
