import { useState } from 'react';
import type { AnswerMap } from '../quiz';
import { IQuizSource } from '../../../../types';

interface IQuestion {
  id: string;
  question: any;
  options: any;
  answer: string;
  optionid: string;
}
interface IQuiz {
  id: number;
  questions: IQuestion;
  answer?: any;
  handleOptionSelect: (questionId: number, id: number) => void;
  source: string;
}
const Question = ({ questions, answer, handleOptionSelect, source }: IQuiz) => {
  const [isActive, setIsactive] = useState<any | null>(null);
  const handleOptionSelection = (id: any) => {
    if (source === IQuizSource.RESULT) return;
    setIsactive(id);
    handleOptionSelect(questions?.question?.id, id);
  };
  const getBgColor = (option: any) => {
    if (source !== IQuizSource.RESULT) return '';

    // correct answer
    if (questions?.question.answer === option.option_id) {
      return 'bg-green-500';
    }

    // selected but wrong
    if (questions.optionid === option.id) {
      return 'bg-red-500';
    }

    return '';
  };

  return (
    <div className="w-auto h-[500px]">
      <h1 className="text-xl">{questions?.question?.question || questions?.question}</h1>
      <div className="mt-10 overflow-auto">
        {questions?.options?.map((option: any) => (
          <div
            onClick={() => handleOptionSelection(option.id)}
            className={`flex items-center justify-between
    ${isActive === option.id ? 'bg-purple-600 text-white' : ''}
    ${getBgColor(option)}
    hover:bg-white hover:text-primary_100 hover:font-semibold
    hover:border-l-2 hover:border-primary_100
    px-4 py-3 cursor-pointer`}
          >
            <div className="flex items-center justify-start">
              <span className="mr-4 ">{option?.option_id}</span>
              <p>{option?.value}</p>
            </div>
            <input
              type="radio"
              checked={isActive === option.id}
              name={String(questions.id)}
              id={String(option.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
