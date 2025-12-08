import { useState } from 'react';
import type { AnswerMap } from '../quiz';

interface IOption {
  id: number;
  index: string;
  value: string;
}

interface IQuestion {
  questions: {
    id: number;
    question: string;
    options: IOption[];
  };
  answer: AnswerMap;
  handleOptionSelect: any;
}

const Question = ({ questions, answer, handleOptionSelect }: any) => {
  const [isActive, setIsactive] = useState<any | null>(null);
  const handleOptionSelection = (id: any) => {
    setIsactive(id);
    handleOptionSelect(questions?.id, id);
  };
  return (
    <div className="w-auto">
      <h1 className="text-xl">{questions?.question?.question}</h1>
      <div className="mt-10">
        {questions?.options?.map((option: any) => (
          <div
            onClick={() => handleOptionSelection(option.id)}
            className={`flex ${answer[questions.id] === option.id ? 'bg-purple-600 text-white' : ''} items-center justify-between hover:bg-white hover:text-primary_100 hover:font-semibold hover:border-l-2 hover:border-primary_100 px-4 py-3 cursor-pointer`}
          >
            <p>{option?.value}</p>
            <input
              type="radio"
              checked={answer[questions.id] === option.id}
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
