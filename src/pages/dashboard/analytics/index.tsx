import { useState } from 'react';
import DashboardHeader from '../../../components/organism/header/dashboard';
import { analyticTab } from './data';
import Info from './info';
import NotFound from '../../NotFound';
const Analytics = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const handleTab = (selection: string) => {
    setActiveTab(prev => selection);
  };
  const tabInfo = {
    overview: <Info />,
    notification: <NotFound />,
    history: <NotFound />,
  };
  return (
    <div className="h-screen bg-primary_300 p-5">
      <DashboardHeader />
      <div className="flex items-center justify-start gap-10 mt-5">
        {analyticTab?.map(analytic => (
          <div>
            <h1
              className={`${activeTab === analytic.title.toLocaleLowerCase() ? 'border-b-2 border-primary_100 text-primary_100' : ''} cursor-pointer font-bold text-xl text-neutral-300 pb-2`}
              onClick={() => handleTab(analytic.title.toLocaleLowerCase())}
            >
              {analytic.title}
            </h1>
          </div>
        ))}
      </div>
      {tabInfo[activeTab as keyof typeof tabInfo]}
    </div>
  );
};

export default Analytics;
