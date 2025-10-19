import React from 'react';
import { useNavigate } from 'react-router';


const AppNotFound = () => {

  const navigate = useNavigate();
  return (
    <div className=' bg-sky-50  p-8'>
      <div className="flex flex-col items-center  bg-white justify-center h-screen text-center px-6 max-w-[1000px] mx-auto shadow-2xl max-h-[480px] rounded-2xl">
   
        <img
          src="/images/App-Error.png"
          alt="app not found"
          className="w-60 mb-6"
        />

        
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3">
          App is not Found
        </h1>

        
        <p className="text-gray-600 text-lg max-w-md mb-8">
          The App you are looking for does not exist or has been removed
        </p>

       
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </button>
      </div>

    </div>
  );
};

export default AppNotFound;