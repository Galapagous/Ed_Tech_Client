// import Button, { IButtonType } from '../../../components/atom/button/button';
// import { features, type IFeature } from './data';

// const Features = () => {
//   return (
//     <div className="lg:h-auto overflow-y-hidden h-auto text-white bg-[#1b263b] p-5 mt-20">
//       <h1 className="font-bold lg:text-[2.5rem] md:text-[1.5rem] text-[1rem] text-center">
//         Our Features
//       </h1>
//       <div className="w-full grid lg:grid-cols-4 md:grid-col-3 gap-5 mt-10">
//         {features.map(({ title, description, background, icon: Icon }: IFeature, index: number) => {
//           return (
//             <div
//               style={{
//                 backgroundImage: `url(${background})`,
//                 backgroundPosition: 'top right',
//               }}
//               key={index}
//               className="lg:h-[400px] h-[300px] overflow-hidden group relative flex items-center flex-col rounded-md"
//             >
//               <div className="inset-0 absolute group-hover:bg-black/70 bg-black/50 z-20"></div>
//               <Icon className={`absolute top-5 left-5 z-30 w-10 h-10`} />
//               <h1 className="relative z-30 mt-32 text-2xl">{title}</h1>
//               <p className="lg:w-3/4 w-full absolute group-hover:bottom-10 group-hover:bg-white/10 p-5 -bottom-20 text-center transition-all ease-linear duration-300 z-30">
//                 {description}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <div className="w-full mx-auto mt-10 flex items-center justify-center">
//         <Button text="Explore More Features" shadow={true} type={IButtonType.SECONDARY} />
//       </div>
//     </div>
//   );
// };

// export default Features;

// === v2 ===
import Button, { IButtonType } from '../../../components/atom/button/button';
import { features, type IFeature } from './data';

const Features = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1b263b] to-[#2a3a5e] p-6 lg:p-12 mt-16">
      <h1 className="font-extrabold text-[2rem] md:text-[3rem] lg:text-[4rem] text-center text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in">
        Our Features
      </h1>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map(({ title, description, background, icon: Icon }: IFeature, index: number) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative h-[350px] lg:h-[400px] rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slide-up"
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-300 z-10"></div>
            <Icon className="absolute top-6 left-6 w-12 h-12 text-blue-400 z-20" />
            <div className="absolute bottom-0 w-full p-6 z-20">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {title}
              </h2>
              <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-12">
        <Button text="Explore More Features" shadow={true} type={IButtonType.SECONDARY} />
      </div>
    </div>
  );
};

export default Features;
