import { useContext, useState } from 'react';
import { headernav } from '../data';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button, { IButtonType } from '../../atom/button/button';
import { AuthContext } from '../../../context/AuthContext';

const MobileView = () => {
  const [active, setActive] = useState<boolean>(false);
  const isAuth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
    setActive(prev => !prev);
  };
  return (
    <div className={`transition-all ease-out duration-500`}>
      <div className={`${active ? 'inset-0 bg-black/70 absolute z-20' : 'hidden'}`}></div>
      {active ? (
        <BiX
          size={24}
          className="relative z-40 cursor-pointer"
          onClick={() => setActive(prev => !prev)}
        />
      ) : (
        <BiMenu
          size={24}
          className="relative z-40 cursor-pointer"
          onClick={() => setActive(prev => !prev)}
        />
      )}
      <div
        className={`absolute w-2/3 h-screen bg-black z-30 text-white p-5 flex items-center pt-20 flex-col gap-10 top-0 ${active ? 'right-0' : '-right-[40rem]'} transition-all duration-700 ease-in`}
      >
        <ul className="flex items-center flex-col gap-10 text-lg">
          {headernav?.map((nav, index: number) => (
            <li key={index} className="">
              {nav.title}
            </li>
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
                onClick={handleClick}
                text="Sign in"
                shadow={false}
                type={IButtonType.PRIMARY}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileView;
