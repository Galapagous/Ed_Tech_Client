import { BiPlay, BiBookOpen } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { getAverage } from '../data';

interface ViewAnswerProps {
  id: string;
  value: any;
}

const ViewAnswer = ({ id, value }: ViewAnswerProps) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/dashboard/quiz/start/${id}?from=result`);
  };

  return (
    <div
      style={{ backgroundColor: '#191919' }}
      className="rounded-xl border border-gray-700 p-6 hover:shadow-lg transition-all"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-green-600/20 flex items-center justify-center">
          <BiBookOpen size={28} className="text-green-500" />
        </div>

        {/* Course / Result */}
        <div>
          <p className="text-gray-400 text-sm">Attempt ID</p>
          <h3 className="text-gray-200 font-medium truncate max-w-xs">{id}</h3>
        </div>

        {/* BIG SCORE */}
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-1">Score</span>
          <span
            className={`text-[4rem] font-bold ${getAverage(value?.score, value?.question) <= 3 ? 'text-red-500' : getAverage(value?.score, value?.question) < 6 ? 'text-yellow-300' : 'text-green-500'}`}
          >
            {value?.score}/{value?.question}
          </span>
        </div>

        {/* BIG ACTION BUTTON */}
        <button
          onClick={handleStartQuiz}
          aria-label="Start quiz"
          className="flex items-center gap-2 px-6 py-4 rounded-xl
                     bg-green-600 text-white text-lg font-semibold
                     hover:bg-green-700 active:scale-95 transition"
        >
          <BiPlay size={26} />
          View Answers
        </button>
      </div>
    </div>
  );
};

export default ViewAnswer;
