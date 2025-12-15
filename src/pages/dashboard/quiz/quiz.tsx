import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';
import { ANSWER_API, QUESTION_API, RESULT_API } from '../../../api/endpoint/endpoint';
import { BiChevronLeft, BiChevronRight, BiPowerOff, BiStopwatch } from 'react-icons/bi';
import Question from './sub/question';
import Button, { IButtonType } from '../../../components/atom/button/button';
import { useMakeRequest } from '../../../hooks/useMakeRequest';
import { IQuizSource } from '../../../types';
import Modal, { ModalWidth } from '../../../components/organism/modal';
import { IoPower } from 'react-icons/io5';

export type AnswerMap = Record<number, number | null>;

const StartQuiz = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  // const [activeOption, setActiveOption] = useState<number>(0);
  const [allAnswers, setAllAnswers] = useState<AnswerMap>([]);
  const [activeCount, setActiveCount] = useState<number>(Number(0));
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [confirmQuit, setConfirmQuit] = useState<boolean>(false);
  const [viewPrompt, setViewPrompt] = useState<boolean>(false);
  const makeRequest = useMakeRequest();
  const navigate = useNavigate();
  const quizLength = (len: number) => {
    if (!len) return;
    setActiveCount(len * 3);
  };
  const source: string = searchParams.get('from') as string;
  const url = source === IQuizSource.QUIZ ? QUESTION_API + `/quiz/${id}` : ANSWER_API + `/${id}`;
  const data = useFetchData<any>(url);

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
    setAllAnswers((prev: any) => [...prev, { questionId: questionId, answerId: selection }]);
  };

  const handleSubmit = () => {
    setLoadingSubmit(true);
    const payload = { answers: allAnswers, courseId: id };

    makeRequest(
      RESULT_API,
      'POST',
      payload,
      () => {
        navigate('/dashboard/quiz');
      },
      () => {},
      () => {
        setLoadingSubmit(false);
      }
    );
  };

  const handleQuit = () => {
    const url = source === IQuizSource.RESULT ? `/dashboard/result` : `/dashboard/courses`;
    if (!viewPrompt) return setViewPrompt(true);
    navigate(url);
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
            <Button
              onClick={handleQuit}
              text="Quit"
              type={IButtonType.SECONDARY}
              icon={BiPowerOff}
            />
          </div>
        </div>

        <div className="w-2/3 bg-primary_200 text-white mx-auto mt-16 h-2/3 px-20 py-16">
          <Question
            id={data?.data?.[activeQuestion]?.id}
            questions={data?.data?.[activeQuestion]}
            answer={source === IQuizSource.QUIZ ? allAnswers[activeQuestion] : null}
            handleOptionSelect={handleOptionSelection}
            source={source}
          />
          <div className="flex items-center gap-10 mt-20 justify-between">
            <div className="flex items-center gap-10">
              <Button onClick={handlePrev} text="Prev" type={IButtonType.SECONDARY} />
              <Button onClick={handleNext} text="Next" type={IButtonType.SECONDARY} />
            </div>
            <div>
              <Button
                loading={loadingSubmit}
                onClick={handleSubmit}
                text="Finish"
                type={IButtonType.PRIMARY}
                disabled={source === IQuizSource.RESULT}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal close={() => setViewPrompt(false)} showModal={viewPrompt} width={ModalWidth.MEDIUM}>
        <div className="w-full mx-auto">
          <IoPower className="mx-auto text-white mb-5" size={40} />
          <h1 className="mb-10 text-white text-center">Are you sure you want to exit</h1>
          <div className="flex items-center justify-center gap-10">
            <Button text="Yes" onClick={handleQuit} type={IButtonType.PRIMARY} />
            <Button text="No" onClick={() => setViewPrompt(false)} type={IButtonType.SECONDARY} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StartQuiz;
