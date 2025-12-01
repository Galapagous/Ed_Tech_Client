import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { COURSE_API } from '../../../api/endpoint/endpoint';
import { useFetchData } from '../../../hooks/useFetchData';
import Modal, { ModalWidth } from '../../../components/organism/modal';
import Instruction from './sub/instruction';
import { BiStopwatch } from 'react-icons/bi';
import { questions } from './data';
import Button, { IButtonType } from '../../../components/atom/button/button';

const StartQuiz = () => {
  const id = useParams();
  const { data } = useFetchData<any>(COURSE_API + `/${id}`);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const handleNext = () => {
    if (activeQuestion === questions?.length - 1) return;
    setActiveQuestion(prev => (prev += 1));
  };

  const handlePrev = () => {
    if (activeQuestion === 0) return;
    setActiveQuestion(prev => (prev -= 1));
  };

  const percentageDone = (): number => {
    return (activeQuestion / questions?.length) * 100;
  };

  const handleOptionSelection = () => {};

  return (
    <div className="w-full p-5 bg-primary_300 text-white h-screen">
      <div className="">
        {/* header section */}
        <div className="flex items-center justify-between w-full">
          <div className="w-2/3 flex items-center justify-start gap-20">
            <h1>Mock Interview</h1>
            <div className={`w-[40%] h-2 rounded-full bg-secondary_100`}>
              <div
                style={{ width: `${percentageDone()}%` }}
                className={`bg-white h-full transition-all ease-linear`}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <BiStopwatch />
            <p>01:20:00</p>
          </div>
        </div>

        {/* question section */}
        <div className="w-2/3 bg-primary_200 text-white mx-auto mt-16 h-2/3 px-20 py-16">
          {/* {questions?.map(question => ( */}
          <div className="">
            <h1 className="text-xl">{questions[activeQuestion]?.question}</h1>
            <div className="mt-10">
              {questions[activeQuestion]?.options?.map(option => (
                <div
                  onClick={handleOptionSelection}
                  className="flex items-center justify-between hover:bg-white hover:text-primary_100 hover:font-semibold hover:border-l-2 hover:border-primary_100 px-4 py-3 cursor-pointer"
                >
                  <p>{option?.value}</p>
                  <input
                    type="radio"
                    name={String(questions[activeQuestion].id)}
                    id={String(option?.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* ))} */}
          <div className="flex items-center gap-10 mt-20 justify-between">
            <div className="flex items-center gap-10">
              <Button onClick={handlePrev} text="Prev" type={IButtonType.SECONDARY} />
              <Button onClick={handleNext} text="Next" type={IButtonType.SECONDARY} />
            </div>
            <div>
              <Button text="Finish" type={IButtonType.PRIMARY} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showNotification}
        close={() => setShowNotification(false)}
        width={ModalWidth.LARGE}
      >
        <Instruction />
      </Modal>
    </div>
  );
};

export default StartQuiz;
