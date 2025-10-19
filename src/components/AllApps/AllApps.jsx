import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { FaStarHalfAlt, FaDownload } from "react-icons/fa";



const AllApps = () => {


  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  
  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (


    <div className="bg-sky-50 pb-10 min-h-screen">
      <h3 className="text-center font-bold text-3xl p-5">All Our App</h3>
      <p className="text-center text-gray-700">
        Explore All Trending Apps on The Market developed by us
      </p>

      <div className="flex justify-between max-w-[1300px] mx-auto mt-6">
        <h3 className="text-xl font-semibold">
          (<span>{filteredApps.length}</span>) App Found
        </h3>

        <label className="input flex items-center gap-2 border border-gray-300 rounded-lg p-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none bg-transparent flex-1"
          />
        </label>
      </div>

     
      <div className="max-w-[1350px] mx-auto mt-6">
        {filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center h-[60vh] bg-white rounded-xl shadow-sm border border-gray-200">
            <img
              src="/images/App-Error.png"
              alt="App Not Found"
              className="w-56 mb-5"
            />
            <h3 className="font-bold text-3xl text-red-600">
              Oops!! App Not Found
            </h3>
            <p className="text-gray-600 mt-3 mb-6 max-w-md">
              The App you are requesting is not found in our system.
              Please try searching for another app.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="btn bg-gradient-to-r text-lg from-[#632EE3] to-[#9F62F2] text-white"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredApps.map((singleApp) => (
              <Link to={`/apps/${singleApp.id}`} key={singleApp.id}>
                <div className="card bg-base-100 w-80 shadow-sm mt-4 mx-auto hover:shadow-md transition-all">
                  <figure className="p-3">
                    <img
                      src={singleApp.image}
                      alt="App"
                      className="rounded-xl flex-1 border-2 border-gray-200"
                    />
                  </figure>
                  <div>
                    <h2 className="card-title ml-5">{singleApp.title}</h2>
                    <div className="flex justify-between mx-4 my-3">
                      <button className="btn btn-soft btn-success h-7">
                        <FaDownload /> {singleApp.downloads}
                      </button>
                      <button className="btn btn-soft btn-error h-7">
                        <FaStarHalfAlt /> {singleApp.ratingAvg}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
