import React from 'react';
import App from './App';

// You shoudd wrap the App component with the QueryClientProvider
// You can also use ReactQueryDevtools to debug the queries

export const BootstrappedApp: React.FC = () => {
  return <App />;
};
