import { useParams } from 'react-router-dom';
import { RESULT_API } from '../../../api/endpoint/endpoint';
import PageNav from '../../../components/organism/breadcrum/pageNav';
import { useFetchData } from '../../../hooks/useFetchData';
import ViewAnswer from './sub/viewAnswer';

const ViewResult = () => {
  const { id } = useParams();
  const { data, refetch } = useFetchData<any>(RESULT_API + `/${id}`);
  return (
    <div className="w-full bg-primary_300 text-white h-screen p-5">
      <PageNav title="Manage Your Result" subTitle="Result info" backLink="/dashboard/result" />
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-100">Result</h2>
      </div>
      <div className="p-6 mb-8">
        <h1 className="mb-4">Attempts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.length ? (
            data?.map((result: any) => <ViewAnswer id={result?.id} value={result?.score} />)
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewResult;
