import React from 'react';
import './App.scss';
import VideoDetails from './pages/VideoDetails/VideoDetails';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import UploadVideo from './pages/UploadVideo/UploadVideo';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/home'} />
    },
    {
      path: "/home",
      element: <VideoDetails />,
    },
    {
      path: "/home/:videoId",
      element: <VideoDetails />,
    },
    {
      path: "/upload-video",
      element: <UploadVideo />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
