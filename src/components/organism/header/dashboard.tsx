import { useState } from 'react';
import { BiChevronDown, BiSearch, BiSolidStopwatch } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';

const DashboardHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleShow = () => {
    setShowMenu(prev => !prev);
  };
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-[2rem] font-bold text-white">Dashboard</h1>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 bg-primary_200 p-2 rounded-md">
          <BiSearch color="white" size={20} />
          <input
            className="p-1 w-[200px] bg-transparent text-white outline-none"
            placeholder="Enter search"
          />
        </div>
        <div className="bg-primary-200 p-[6px] rounded-full">
          <BiSolidStopwatch color="white" />
        </div>
        <div className="bg-primary_200 p-[6px] rounded-full">
          <IoNotifications color="white" />
        </div>
        <div onClick={handleShow} className="flex items-center cursor-pointer gap-1">
          <FaUserAlt className="text-white" size={22} />
          <div className="bg-primary_200 p-[2px] rounded-full">
            <BiChevronDown
              size={15}
              className={`${showMenu ? 'rotate-180' : ''} transition-all ease-linear duration-300`}
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
