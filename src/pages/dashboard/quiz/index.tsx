import { COURSE_API } from '../../../api/endpoint/endpoint';
import { useFetchData } from '../../../hooks/useFetchData';
import { getQuizData } from './data';
import ViewQuiz from './sub/viewQuiz';

const Quiz = () => {
  const { data, refetch } = useFetchData<any>(COURSE_API);

  const quizData: any = getQuizData(data);
  return (
    <div className="bg-primary_300 text-white h-screen p-5">
      <h1 className="text-2xl font-semibold mb-3">Quiz Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizData?.map((data: any) => (
          <ViewQuiz course={data} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
