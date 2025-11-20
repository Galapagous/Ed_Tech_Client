import { FiActivity } from 'react-icons/fi';
import { headernav } from '../data';

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col text-white bg-black/20 p-10">
      <div className="flex items-center gap-5">
        <FiActivity />
        <h1>M-Learn</h1>
      </div>
      <ul className="mt-10 flex items-center md:gap-20 gap-10">
        {headernav?.map((header, index:number) => (
          <li key={index}>{header?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
