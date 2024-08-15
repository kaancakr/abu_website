import React from 'react';
import MainSection from './MainSection';
import AdvertisementSection from './AdvertisementSection';
import ChatBotSection from './ChatBotSection';

const GridLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-10 h-screen p-4 md:grid-cols-2">
      <div className="col-span-1 md:col-span-2">
        <MainSection />
      </div>
      <div className="col-span-1">
        <AdvertisementSection />
      </div>
      <div className="col-span-1">
        <ChatBotSection />
      </div>
    </div>
  );
};

export default GridLayout;