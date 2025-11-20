import {
  analyticCard,
  chartData,
  sampleTableData,
  sampleTableHead,
  topCourses,
  type IDashboardCard,
} from './data';
import DarkLineChart from '../../../components/organism/chart/line';
import Percentage from '../../../components/molecule/percentahe';
import Table from '../../../components/organism/table/table';

const Info = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-8 mt-5">
        {analyticCard?.map(({ title, description, value, icon: Icon }: IDashboardCard) => (
          <div
            style={{ backgroundColor: `#191919` }}
            className="p-5 py-10 text-white rounded-md group transition-all duration-300 hover:bg-gradient-to-b hover:from-[#7536f3] hover:to-[#191919] hover:text-white hover:border-transparent"
          >
            <h1 className="font-bold">{title}</h1>
            <div className="flex items-center justify-between w-full my-5">
              <div className="p-3 bg-white rounded-full group-hover:bg-white/20 transition-all">
                <Icon color="orange" size={24} />
              </div>
              <h1 className="font-semibold text-2xl">{value}</h1>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-4 gap-8">
        <div className="col-span-2">
          <DarkLineChart data={chartData} />
        </div>
        <div className="bg-primary_200 col-span-1 flex items-center justify-evenly flex-col p-3 rounded-md">
          <h1 className="mb-1 text-white text-2xl">Latest Course</h1>
          {topCourses?.map(({ name, value }) => (
            <Percentage name={name} value={value} />
          ))}
        </div>
      </div>
      <div className="text-white mt-5 p-5 bg-primary_200 rounded-md">
        <h1>Recent Posts</h1>
        <div className="mt-3">
          <Table tableData={sampleTableData} tableHead={sampleTableHead} />
        </div>
      </div>
    </div>
  );
};

export default Info;
