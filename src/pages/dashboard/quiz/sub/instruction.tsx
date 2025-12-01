import Writter from '../../../../assets/svg/undraw_book-writer_ri5u.svg';
import Button, { IButtonType } from '../../../../components/atom/button/button';
import { instructions } from '../data';

const Instruction = () => {
  return (
    <div className="text-white">
      <h1 className="font-semibold text-2xl">Instruction</h1>

      <div className="mt-6">
        <h2 className="text-lg font-medium">Kindly read the instructions below</h2>

        <ul className="mt-4 space-y-2 list-item pl-6">
          {instructions?.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6 justify-center">
          <img className="w-1/2 md:w-1/3" src={Writter} alt="writing illustration" />

          <div className="flex items-center justify-center gap-6">
            <Button text="Accept" type={IButtonType.PRIMARY} />
            <Button text="Reject" type={IButtonType.SECONDARY} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
