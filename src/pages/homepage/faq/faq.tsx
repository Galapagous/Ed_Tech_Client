import { BiPlus } from 'react-icons/bi';
import { faqs, type IFaq } from './data';
import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';

const Faq = () => {
  const [active, setActive] = useState<number | null>(null);
  const handleToggle = (indexValue: number): void => {
    setActive(prev => (prev === indexValue ? null : indexValue));
  };
  return (
    <div className="text-white my-20">
      <h1 className="text-[2rem] font-bold">FAQ</h1>
      <div className="flex flex-col gap-5">
        {faqs.map((faq: IFaq, index) => (
          <div key={index} className="border-b pb-3">
            <div
              onClick={() => handleToggle(index)}
              className={`font-semibold cursor-pointer text-lg sm:text-xl flex justify-between items-center p-2 transition-all duration-300 ${
                active === index ? 'bg-black text-white' : 'hover:bg-neutral-200 text-neutral-400'
              }`}
            >
              <p>{faq.question}</p>
              <HiPlus
                className={`transform transition-transform duration-300 ${
                  active === index ? 'rotate-[225deg]' : ''
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out text-neutral-100 text-sm sm:text-base px-2 ${
                active === index ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
