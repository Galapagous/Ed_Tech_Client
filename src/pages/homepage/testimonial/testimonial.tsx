import { BsPerson } from 'react-icons/bs';
import { testimonials } from './data';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface ITestimonial {
  fullName: string;
  position: string;
  testimonial: string;
}

const Testimonial = () => {
  const [active, setActive] = useState<number>(0);
  const handleNext = () => {
    if (active === testimonials?.length - 1) {
      setActive(0);
    } else {
      setActive(prev => prev + 1);
    }
  };
  const handlePrev = () => {
    if (active === 0) {
      setActive(testimonials?.length - 1);
    } else {
      setActive(prev => prev - 1);
    }
  };
  return (
    <div className="text-white mt-10 flex items-center justify-center flex-col lg:w-1/2 md:w-2/3 mx-auto md:p-10 p-5">
      <h1 className="lg:mb-10 mb-5 font-semibold md:text-[3rem] text-[2rem]">Testimonial</h1>
      <div className={``}>
        {testimonials?.map((testimonial: ITestimonial, index: number) => (
          <div
            key={index}
            className={`${active === index ? '' : 'hidden'} transition-all ease-linear duration-500`}
          >
            <p className="md:text-xl text-lg text-center font-light md:h-[150px] h-[220px]">
              {testimonial.testimonial}
            </p>
            <div className="flex items-start gap-5 mt-5">
              <BsPerson size={24} className="" />
              <div>
                <h3>{testimonial.fullName}</h3>
                <p className="text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-5">
        <BiChevronLeft onClick={handlePrev} size={24} className="cursor-pointer" />
        {testimonials?.map((_, index: number) => (
          <div
            key={index}
            className={`w-2 h-2 ${index === active ? 'bg-orange-400 shadow-2xl' : 'bg-white/70'} rounded-full`}
          ></div>
        ))}
        <BiChevronRight onClick={handleNext} size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Testimonial;
