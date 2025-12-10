import React from 'react';
import Barner from '../../../components/organism/dashboard/Barner';
import ResultImage from '../../../assets/image/result.jpeg';

const Result = () => {
  return (
    <div className="bg-primary_300 text-white h-screen p-5">
      <h1 className="text-2xl font-semibold mb-3">Result Home</h1>
      <div className="my-10">
        <Barner title="RESULT" image={ResultImage} color="#540863" />
      </div>
    </div>
  );
};

export default Result;
