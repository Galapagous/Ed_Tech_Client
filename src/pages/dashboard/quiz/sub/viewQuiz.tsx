import { useState } from 'react';
import { BiBookOpen, BiCalendar, BiPlay } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { RiAiGenerate2 } from 'react-icons/ri';

const ViewQuiz = ({ course }: { course: any }) => {
  const [loading, setLoading] = useState(false);
  const handleDeleteCourse = (courseId: string) => {
    console.log(courseId);
  };
  const handleGenerateQuestion = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <div
      style={{ backgroundColor: `#191919` }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 p-4"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center`}>
            <BiBookOpen size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-50 text-lg mb-2">{course?.couse}</h3>
            <p className="text-gray-300 text-sm">{course.description}</p>
            <div className="flex items-center space-x-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center">
                <FiFileText size={14} className="mr-1" />
                {course.docs} documents
              </span>
              <span className="flex items-center">
                <BiCalendar size={14} className="mr-1" />
                {course?.updatedAt}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {course.questions?.length}
              </span>
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  course.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {course.attempt}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start space-x-4 mt-2">
          <button
            onClick={handleGenerateQuestion}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <RiAiGenerate2 className={`${loading ? 'animate-spin' : ''}`} size={16} />
          </button>
          <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <BiPlay size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewQuiz;
