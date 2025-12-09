import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';
import { QUESTION_API } from '../../../api/endpoint/endpoint';
import { BiStopwatch } from 'react-icons/bi';
import Question from './sub/question';
import Button, { IButtonType } from '../../../components/atom/button/button';

export type AnswerMap = Record<number, number | null>;

const StartQuiz = () => {
  const { id } = useParams();
  const data = useFetchData<any>(QUESTION_API + `/quiz/${id}`);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [activeOption, setActiveOption] = useState<number>(0);
  const [allAnswers, setAllAnswers] = useState<AnswerMap>({});
  const [activeCount, setActiveCount] = useState<number>(Number(0));
  const quizLength = (len: number) => {
    if (!len) return;
    setActiveCount(len * 3);
  };

  useEffect(() => {
    if (!startQuiz) return;

    const intervalId = setInterval(() => {
      setActiveCount(prev => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startQuiz]);

  const handleStartQuiz = () => {
    setShowNotification(false);
    quizLength(data?.data?.length);
    setStartQuiz(true);
  };

  const handleNext = () => {
    if (activeQuestion === data?.data?.length - 1) return;
    setActiveQuestion(prev => (prev += 1));
  };

  const handlePrev = () => {
    if (activeQuestion === 0) return;
    setActiveQuestion(prev => (prev -= 1));
  };

  const percentageDone = (): number => {
    return (activeQuestion / (data?.data?.length + 1)) * 100;
  };

  const handleOptionSelection = (questionId: number, selection: number) => {
    setAllAnswers((prev: any) => ({ ...prev, [questionId]: selection }));
  };

  const handleSubmit = () => {
    console.log('ans -->', allAnswers);
  };

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
            <p>{activeCount}</p>
          </div>
        </div>

        <div className="w-2/3 bg-primary_200 text-white mx-auto mt-16 h-2/3 px-20 py-16">
          <Question
            questions={data?.data?.[activeQuestion]}
            answer={allAnswers}
            handleOptionSelect={handleOptionSelection}
          />
          <div className="flex items-center gap-10 mt-20 justify-between">
            <div className="flex items-center gap-10">
              <Button onClick={handlePrev} text="Prev" type={IButtonType.SECONDARY} />
              <Button onClick={handleNext} text="Next" type={IButtonType.SECONDARY} />
            </div>
            <div>
              <Button onClick={handleSubmit} text="Finish" type={IButtonType.PRIMARY} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
