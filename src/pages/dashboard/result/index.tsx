import Barner from '../../../components/organism/dashboard/Barner';
import ResultImage from '../../../assets/image/result.jpeg';
import Table from '../../../components/organism/table/table';
import { useFetchData } from '../../../hooks/useFetchData';
import { COURSE_API } from '../../../api/endpoint/endpoint';
import { resultTabledata, resultTableHeader } from './data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const { data } = useFetchData<any>(COURSE_API);
  const [currentData, setCurrentData] = useState<any | null>(null);
  const navigate = useNavigate();
  const dropdownMenu = [
    {
      label: 'view',
      action: () => {
        navigate(`/dashboard/result/view/${currentData?.id || currentData}`);
      },
    },
    {
      label: 'delete',
      action: () => {
        console.log('delete result');
      },
    },
  ];
  return (
    <div className="bg-primary_300 text-white h-screen p-5">
      <h1 className="text-2xl font-semibold mb-3">Result Home</h1>
      <div className="my-10">
        <Barner title="RESULT" image={ResultImage} color="#540863" />
      </div>
      {/* -- Table --  */}
      <div className="bg-primary_200 w-full p-5 rounded-md">
        <Table
          tableData={resultTabledata(data)}
          tableHead={resultTableHeader}
          showAction={true}
          actionMenu={dropdownMenu}
          handleCurrent={data => setCurrentData(data)}
        />
      </div>
    </div>
  );
};

export default Result;
