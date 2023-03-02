import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './routes';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen App bg-background">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
