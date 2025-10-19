import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import { Outlet } from 'react-router';
 import { ToastContainer} from 'react-toastify';


const Root = () => {


    return (
        <div>
            <Navbar></Navbar>


            <Outlet>

            </Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;