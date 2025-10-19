import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaDownload, FaStarHalfAlt, FaRegThumbsUp } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";



const AppDetails = () => {

  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const data = app.ratings;

  if (!app) {
    return <h2 className="text-center text-2xl mt-10">App not found</h2>;
  }


 // eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.some((a) => a.id === app.id);
    if (alreadyInstalled) {
      setInstalled(true);
    }
  }, [app.id]);

 
  const handleInstall = () => {
    setInstalled(true);
    alert(`${app.title} Installed Successfully!`);

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.some((a) => a.id === app.id);

    if (!alreadyInstalled) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      
      <div className="flex flex-col md:flex-row border-amber-700 max-w-[1200px] mx-auto p-6">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-2xl w-64 h-64 object-cover"
        />

        <div className="ml-0 md:ml-10 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <h3 className="text-blue-500 mt-2 font-bold">{app.companyName}</h3>

          <div className="flex flex-wrap gap-10 border-t-2 border-gray-200 mt-4">
            <div className="flex mt-8 justify-center items-center">
              <ul>
                <li>
                  <h3 className="ml-7 text-green-600">
                    <FaDownload />
                  </h3>
                  <h3 className="text-gray-500 mt-2 text-center">Download</h3>
                  <h3 className="font-bold text-4xl text-center">
                    {app.downloads}
                  </h3>
                </li>
              </ul>
            </div>

            <div className="flex mt-8 justify-center items-center">
              <ul>
                <li>
                  <h3 className="ml-13 text-red-600">
                    <FaStarHalfAlt />
                  </h3>
                  <h3 className="text-gray-500 mt-2 text-center">
                    Average Rating
                  </h3>
                  <h3 className="font-bold text-4xl text-center">
                    {app.ratingAvg}
                  </h3>
                </li>
              </ul>
            </div>

            <div className="flex mt-8 justify-center items-center">
              <ul>
                <li>
                  <h3 className="ml-7 text-green-600">
                    <FaRegThumbsUp />
                  </h3>
                  <h3 className="text-gray-500 mt-2 text-center">
                    Total Review
                  </h3>
                  <h3 className="font-bold text-4xl text-center">
                    {app.reviews}
                  </h3>
                </li>
              </ul>
            </div>
          </div>

        
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn mt-5 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
              }`}
          >
            {installed ? "Installed" : `Install Now (${app.size}MB)`}
          </button>
        </div>
      </div>

   
      <div className="max-w-[1450px] mx-auto">
        <h3 className="text-xl font-bold border-t-2 border-gray-200 mt-10 ml-40">
          Ratings
        </h3>
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Ratings Distribution
          </h2>

          <ResponsiveContainer width="80%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#8884d8"
                barSize={50}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    
      <div className="max-w-[1200px] mx-auto mt-6">
        <h3 className="border-t-2 border-gray-200 text-xl font-semibold p-2">
          Description
        </h3>
        <p className="p-8 text-gray-600">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
