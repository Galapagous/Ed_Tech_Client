import { Outlet } from 'react-router-dom';
import Sidebar from '../organism/sidebar/sidebar';
import { useState } from 'react';

const DashboardLayout = () => {
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setShowSideBar((prev: boolean) => !prev);
  };
  return (
    <div className="flex items-start justify-start w-screen h-screen">
      <div className={`${showSidebar ? 'w-[15%]' : 'w-[4%]'} transition-all duration-500 ease-in`}>
        <Sidebar show={showSidebar} toggle={toggleSidebar} />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
