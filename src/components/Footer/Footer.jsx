import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (


    <div>
      <footer className="footer sm:footer-horizontal text-base-content p-7 bg-black shadow-sm ">
        <aside>

          <div className='flex items-center md:mt-16'>
            <img className='w-8' src="/public/images/logo.png" alt="" />
            <h3 className='font-semibold text-xl text-white ml-1'>

              HERO.IO
            </h3>
          </div>


        </aside>
        <nav className='md:mt-6'>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-gray-400">About Us</a>
          <a className="link link-hover text-gray-400">Our Mission</a>
          <a className="link link-hover text-gray-400">Administrator</a>

        </nav>
        <nav className='md:mt-6'>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-gray-400">Products & Services</a>
          <a className="link link-hover text-gray-400">Customer Stories</a>
          <a className="link link-hover text-gray-400">Download Apps</a>

        </nav>
        <nav className='md:mt-6'>
          <h6 className="footer-title text-white">Information</h6>
          <a className="link link-hover text-gray-400">Privacy Policy</a>
          <a className="link link-hover text-gray-400">Terms & Conditions</a>
          <a className="link link-hover text-gray-400">Join Us</a>
        </nav>
        <nav className='md:mt-6'>
          <h6 className="footer-title text-white" >Social Links</h6>
          <a className="link link-hover text-gray-400 flex"><FaTwitter className='mt-1 mr-1' />Twitter</a>
          <a className="link link-hover text-gray-400 flex"><FaFacebook className='mt-1 mr-1' />Facebook</a>
          <a className="link link-hover text-gray-400 flex"> <FaLinkedin className='mt-1 mr-1' /> LinkedIn</a>

        </nav>



      </footer>

      <div className=' bg-black text-center  pb-6 -mb-6'>
        <h3 className='  text-gray-400'>Copyright © 2025 - All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;