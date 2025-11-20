import Button, { IButtonType } from '../../../components/atom/button/button';
import { plans } from './data';
import Background from '../../../assets/image/back3.jpeg';

export interface IPlan {
  title: string;
  amount: number;
  userInfo: string;
  features: string[];
}

const Plan = () => {
  return (
    <div className="w-full bg-white/10 text-white mt-20 py-14 px-5">
      <h1 className="mb-10 font-semibold text-[2rem] text-center">Pricing Plans</h1>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
        {plans?.map((plan: IPlan, index: number) => (
          <div
            className={`lg:w-[30%] lg:h-[600px] w-full h-auto bg-black md:p-10 p-5 rounded-lg`}
            key={index}
          >
            <h2 className="font-bold lg:text-[2rem] text-[1rem]">{plan.title}</h2>
            <h1 className="font-bold lg:text-[4rem] text-[2rem]">{plan.amount}</h1>
            <div className="md:mb-7 mb-4">
              <Button text="Get Started" shadow={false} type={IButtonType.PRIMARY} />
            </div>
            <p className="md:my-10 my-5">{plan.userInfo}</p>
            <ul className="ml-4">
              {plan.features?.map((feature: string, index: number) => (
                <li className="list-disc" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* custom plan */}
      <div
        className="lg:p-20 md:p-10 p-5 mt-10 relative w-full"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="inset-0 absolute bg-black/70 z-30"></div>
        <div className="relative z-40 w-full">
          <h1 className="lg:text-[2rem] text-[1rem] font-semibold">Need a custom plan</h1>
          <p className="text-[1rem] my-2">
            If you want to switch from premium or will like a personalize plan of your own?
          </p>
          <Button text="Contact Us" type={IButtonType.SECONDARY} shadow={false} />
        </div>
      </div>
    </div>
  );
};

export default Plan;
