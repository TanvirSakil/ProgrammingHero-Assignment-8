import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router';
import { FaStarHalfAlt, FaDownload } from "react-icons/fa";
import Banner from '../Banner/Banner';
import State from '../State/State';

const DefaultHomeApp = () => {

  const data = useLoaderData();
  console.log(data);


  return (


    <div className='bg-sky-50'>
      <Banner></Banner>
      <State></State>

      <h3 className='text-center font-bold text-3xl p-5'  >Trending app</h3>
      <p className='text-center text-gray-700 '>Explore All Trending Apps on The Market developed by us</p>


      <div className='grid grid-cols-4  max-w-[1350px] mx-auto mt-6'>

        {

          data.map((singleApp) => (


            <Link to={`/apps/${singleApp.id}`} key={singleApp.id}>
              <div className="card  bg-base-100 w-80 shadow-xl mt-4 mx-auto">


                <figure className="p-3">
                  <img
                    src={singleApp.image}
                    alt="App"
                    className="rounded-xl  flex-1 border-2 border-gray-200" />
                </figure>
                <div className="">
                  <h2 className="card-title ml-5">{singleApp.title}</h2>
                  <div className="flex justify-between mx-4 my-3">
                    <button className="btn btn-soft btn-success h-7"> <FaDownload /> {singleApp.downloads}</button>
                    <button className="btn btn-soft btn-error h-7"> <FaStarHalfAlt /> {singleApp.ratingAvg}</button>
                  </div>
                </div>
              </div>

            </Link>



          ))
        };



      </div>

      <div className=' flex justify-center max-w-[1400px] mx-auto p-6'>
        <NavLink to="/apps" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 md:mr-12 w-20  '>Show All</NavLink>


      </div>


    </div>
  );
};

export default DefaultHomeApp;