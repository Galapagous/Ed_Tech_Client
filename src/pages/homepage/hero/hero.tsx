import Background from '../../../assets/image/pexels-cottonbro-6153738.jpg';
import Button, { IButtonType } from '../../../components/atom/button/button';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
      className="lg:h-[70vh] h-[50vh] overflow-y-hidden text-white"
    >
      <div className="lg:w-1/3 md:w-2/3">
        <h1 className="font-bold mt-20 lg:text-[4rem] md:text-[3rem] text-[2.3rem]">
          The Future of learning is here
        </h1>
        <p className="lg:font-semibold text-lg p-2 md:bg-black/30 border-l-2 border-green-100 px-2 md:w-2/3 mt-3 lg:mb-10 mb-5">
          upload, and test your knowledge on your academic papers
        </p>
        <Button text="view plan" type={IButtonType.PRIMARY} shadow={false} />
      </div>
    </div>
  );
};

export default Hero;
