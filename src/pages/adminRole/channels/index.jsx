import React from 'react';
import WelcomeComponent from '../channels/features/WelcomeComponent';
import Channels from '../channels/features/Channels';

const ChannelsPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <WelcomeComponent />
      <Channels />
    </div>
  );
};

export default ChannelsPage;
