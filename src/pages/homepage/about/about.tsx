import type { IconType } from 'react-icons';
import AboutBackground from '../../../assets/image/pexels-brett-sayles-3970096.jpg';
import { aboutStep } from './data';

interface IAboutStep {
  id: number;
  title: string;
  icon: IconType;
}

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${AboutBackground})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full text-white flex items-center flex-col justify-end lg:p-10 p-5 mt-20"
    >
      <div className="md:w-1/2">
        <h1 className="font-bold text-[2.5rem]">What is M-Learn</h1>
        <p className="my-6">
          M-Learn is an ed-tech platform for all academia all over the world to use the power of AI
          to test and improve your understanding of your course materials
        </p>
        <h2 className="text-xl font-semibold mb-3">This is achieve via 3 steps</h2>
        <ul className="flex flex-col items-start justify-evenly gap-10">
          {aboutStep?.map(({ id, title, icon: Icon }: IAboutStep, index: number) => {
            return (
              <div className="flex items-center gap-5" key={index}>
                <Icon className="w-8 h-8" />
                <p className="">{title}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;

// === v2 ===
// import type { IconType } from 'react-icons';
// import AboutBackground from '../../../assets/image/pexels-brett-sayles-3970096.jpg';
// import { aboutStep } from './data';

// interface IAboutStep {
//   id: number;
//   title: string;
//   icon: IconType;
// }

// const About = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${AboutBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//       className="w-full min-h-screen text-white flex items-center justify-center lg:p-12 p-6 mt-16"
//     >
//       <div className="md:w-3/5 w-full bg-black/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-500">
//         <h1 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in">
//           What is M-Learn?
//         </h1>
//         <p className="my-6 text-gray-200 text-lg leading-relaxed animate-slide-up">
//           M-Learn is an innovative ed-tech platform empowering academia worldwide to harness AI for
//           testing and enhancing understanding of course materials.
//         </p>
//         <h2 className="text-2xl font-semibold mb-6 text-blue-300 animate-slide-up delay-100">
//           Achieved in 3 Simple Steps
//         </h2>
//         <ul className="flex flex-col gap-6">
//           {aboutStep?.map(({ id, title, icon: Icon }: IAboutStep, index: number) => (
//             <li
//               key={id}
//               className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 animate-slide-up"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <Icon className="w-10 h-10 text-blue-400" />
//               <p className="text-gray-100 text-base md:text-lg">{title}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;
