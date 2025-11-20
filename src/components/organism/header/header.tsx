import { BsPerson } from 'react-icons/bs';
import { useCheckScreenSize } from '../../../hooks/checkMobile';
import { headernav } from '../data';
import MobileView from './mobileView';
import Button, { IButtonType } from '../../atom/button/button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import Logo from '../../molecule/logo';

interface IHeaderNav {
  title: string;
  link: string;
}

const Header = () => {
  const { isMobile } = useCheckScreenSize();
  const isAuth = useContext(AuthContext)?.authDetails?.user;
  const navigate = useNavigate();
  return (
    <nav className={`w-full flex items-center justify-between text-white md:py-5 lg:py-7 py-3`}>
      <Logo />
      {isMobile ? (
        <MobileView />
      ) : (
        <ul className="flex items-center justify-evenly gap-10">
          {headernav?.map((nav: IHeaderNav, index: number) => (
            <li key={index}>{nav.title}</li>
          ))}
          {isAuth ? (
            <li>
              <BsPerson
                className="cursor-pointer hover:text-red-400"
                onClick={() => navigate('/dashboard/analytics')}
              />
            </li>
          ) : (
            <li>
              <Button
                onClick={() => navigate('/login')}
                text="Sign in"
                shadow={false}
                type={IButtonType.PRIMARY}
              />
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
