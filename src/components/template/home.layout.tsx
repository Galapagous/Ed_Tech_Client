import { Outlet } from 'react-router-dom';
import Header from '../organism/header/header';
import Footer from '../organism/footer/footer';

const HomeLayout = () => {
  return (
    <div className={`px-1 md:px-6 lg:px-20 bg-primary_100`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
