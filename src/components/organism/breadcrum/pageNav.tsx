import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface IBreadCrum {
  title: string;
  subTitle?: string;
  backLink?: string;
}

const PageNav = ({ title, subTitle, backLink }: IBreadCrum) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-300 text-sm">{subTitle}</p>
      <div className="mt-3">
        {backLink && (
          <Link to={backLink} className="mt-2 flex items-center justify-start gap-2">
            <BiChevronLeft size={20} className="text-red-500" /> Back
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNav;
