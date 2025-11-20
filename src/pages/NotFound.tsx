import { useNavigate } from 'react-router-dom';
import NotfoundImg from '../assets/image/notFound.jpeg';
import Button, { IButtonType } from '../components/atom/button/button';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: `url(${NotfoundImg})`,
      }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div className="bg-black/85 p-5 flex items-center justify-center flex-col text-white">
        <h1 className="font-semibold text-[2rem] mb-5">Oppps</h1>
        <p className="text-[1rem] mb-3">Seems You hit our error page</p>
        <Button text="Homepage" type={IButtonType.PRIMARY} onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default NotFound;
