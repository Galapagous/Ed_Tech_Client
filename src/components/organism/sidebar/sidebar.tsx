import { BsToggles } from 'react-icons/bs';
import Logo from '../../molecule/logo';
import { sidebarData, type ISideIcon } from './data';
import NavLink from '../../molecule/link';
import { BiPowerOff } from 'react-icons/bi';
import { useLogout } from '../../../hooks/useLogout';

const Sidebar = ({ toggle, show }: { toggle: () => void; show: boolean }) => {
  const logout = useLogout();
  // const navigate = useNavigate();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className={`bg-primary_200 text-white h-screen flex flex-col justify-between`}>
      <div>
        <div className="flex items-center justify-between mt-5 px-6">
          {show && <Logo />}
          <BsToggles
            onClick={toggle}
            className={`cursor-pointer ${!show ? 'text-primary_100' : ''}`}
          />
        </div>
        <div className="mt-20 px-6">
          <div>
            {sidebarData?.map(({ title, icon, link }: ISideIcon) => (
              <div className="mb-10">
                <NavLink title={title} icon={icon} link={link} show={show} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 mb-5">
        <button className="flex items-center justify-center gap-5" onClick={handleLogout}>
          <BiPowerOff />
          {show && <h1>Logout</h1>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
