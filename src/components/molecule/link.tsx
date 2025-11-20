import { Link } from 'react-router-dom';
import type { IconType } from 'react-icons';

const NavLink = ({
  title,
  icon: Icon,
  link,
  show,
}: {
  title: string;
  icon: IconType;
  link: string;
  show?: boolean;
}) => {
  return (
    <div>
      <Link to={link} className="flex items-center justify-start gap-5 group">
        <Icon />
        {show && <h1 className="hover:text-yellow-600">{title}</h1>}
      </Link>
    </div>
  );
};

export default NavLink;
