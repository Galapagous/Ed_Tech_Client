import { FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center lg:gap-5 md:gap-3 gap-2">
      <FiActivity />
      <h1>
        <Link to="/">M-LEARN</Link>
      </h1>
    </div>
  );
};

export default Logo;
