import React, { useEffect, useState } from "react";
import { Link } from "react-router";



const InstallationApp = () => {


  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");


  const parseDownloads = (downloads) => {
    if (!downloads) return 0;
    downloads = downloads.toString().trim();
    if (downloads.endsWith("M")) {
      return parseFloat(downloads.replace("M", "")) * 1000000;
    } else if (downloads.endsWith("K")) {
      return parseFloat(downloads.replace("K", "")) * 1000;
    } else {
      return parseInt(downloads);
    }
  };




  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);




  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };




  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sortedApps = [...installedApps];

    if (value === "high-low") {
      sortedApps.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else if (value === "low-high") {
      sortedApps.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    }

    setInstalledApps(sortedApps);
  };



  if (installedApps.length === 0) {
    return (
      <div className="my-50">
        <div className="text-center mt-20 ">
          <h1 className="text-3xl font-bold text-gray-700">No Installed Apps</h1>
          <p className="text-gray-500 mt-2">Install some apps to see them here.</p>
        </div>
      </div>
    );
  }



  return (



    <div className="bg-sky-50">
      <div className="max-w-[1200px] mx-auto p-6">

        <h1 className="text-4xl font-bold  text-purple-700 text-center mt-6 mb-3">
          Installed Applications
        </h1>
        <h3 className="text-center text-gray-600 mb-6">Explore All Trending Apps on the Market developed by us</h3>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-xl font-semibold text-center md:text-left">
            App Found ({installedApps.length})
          </h1>


          <div className="mt-4 md:mt-0">
            <label htmlFor="sort" className="text-gray-700 font-semibold mr-2">
              Sort by Downloads:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="default">Default</option>
              <option value="high-low">High–Low</option>
              <option value="low-high">Low–High</option>
            </select>
          </div>
        </div>


        <div className=" ">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition flex justify-between items-center my-4"
            >

              <div className="flex items-center gap-4">

                <div>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-40 h-40 object-cover mx-auto rounded-xl"
                  />

                </div>

                <div>
                  <h3 className="text-xl font-bold mt-3 text-left">{app.title}</h3>
                  <p className="text-gray-500 text-left text-sm my-2">{app.companyName}</p>
                  <p className="text-gray-600 text-left text-sm mb-3">
                    📥 <strong>{app.downloads}</strong> downloads
                  </p>


                </div>


              </div>


              <div className="flex justify-center gap-3 mt-3">

                <Link
                  to={`/apps/${app.id}`}
                  className="text-blue-600 my-auto font-semibold hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationApp;
