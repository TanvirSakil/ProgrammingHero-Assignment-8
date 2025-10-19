import React from 'react';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-50 text-center px-6">

      <img
        src="/images/error-404.png"
        alt="404 Not Found"
        className="w-80 mb-6"
      />


      <h1 className="text-5xl font-extrabold text-gray-800 mb-3">
        404 - Page Not Found
      </h1>


      <p className="text-gray-600 text-lg max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or might have been moved.
      </p>


      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
