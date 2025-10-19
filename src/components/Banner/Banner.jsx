import React from 'react';
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";


const Banner = () => {

    
    return (
        <div className='bg-sky-50'>


            <div className='text-center mx-8 '>
                <h3 className='text-2xl md:text-4xl font-bold p-6'>We Build <br /> <span className='text-purple-600'>Productive</span> Apps</h3>
                <p className=' text-gray-500 text-sm md:text-lg'> At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
            </div>


            <div className='flex  justify-center  gap-3 mt-6'>
                <button onClick={() => window.open("https://play.google.com/store/games?hl=en", "_blank")} className="btn p-2 bg-gradient-to-bl from-green-200 via-tilt-400 to-cyan-600 text-gray-950 "> <i className="fa-solid fa-plus"></i> <FaGooglePlay /> Google Play</button>

                <button onClick={() => window.open("https://www.apple.com/app-store/", "_blank")} className="btn p-2 bg-gradient-to-bl from-cyan-600   via-tilt-400 to-green-200  text-gray-950  "> <i className="fa-solid fa-plus"></i> <FaAppStoreIos /> App Store</button>



            </div>


            <img className='w-70 md:w-xl mx-auto mt-6' src="/images/hero.png" alt="" />




        </div>




    )
};

export default Banner;