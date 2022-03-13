import React from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaFilePdf, FaGoogle, FaInstagram, FaInstagramSquare, FaPrint, FaRegSun } from "react-icons/fa";

import { Avatar } from '../assets';
const colors = require('tailwindcss/colors')
function Home() {
    const print = (pdf: string) => {
        var iframe: HTMLIFrameElement = document.createElement('iframe');
        // Hide the IFrame.  
        iframe.style.visibility = "hidden";
        // Define the source.  
        iframe.src = pdf;
        // Add the IFrame to the web page.
        document.body.appendChild(iframe);
        iframe?.contentWindow?.focus();
        iframe?.contentWindow?.print();
    }
    return (
        <div className="relative rounded-3xl md:w-6/12 sm:w-10/12 smx:w-10/12 p-6 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark flex justify-center items-center flex-col">
            <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
            <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>
            <div className="flex mt-4">
                <a href='https://www.facebook.com/songoku.bui/' target="_blank" rel="noreferrer" className="btn-shadow dark:btn-shadow-dark fb rounded-full text-center w-14 h-14"><FaFacebookF className="text-3xl" fill={colors.coolGray[400]} /></a>
                <a href='https://www.instagram.com/nambui27/' target="_blank" rel="noreferrer" className="btn-shadow dark:btn-shadow-dark itg rounded-full text-center w-14 h-14 mx-5"><FaInstagramSquare className="text-3xl" fill={colors.coolGray[400]} /></a>
                <a href='mailto:bvnam98@gmail.com' target="_blank" rel="noreferrer" className="btn-shadow dark:btn-shadow-dark gg rounded-full text-center w-14 h-14"><FaGoogle className="text-3xl" fill={colors.coolGray[400]} /></a>
            </div>
            <div className="absolute bottom-10 2xl:right-20 2xl:left-20 md:right-10 md:left-10 flex items-center justify-between">
                <span className="flex items-center">
                    <a
                        href='/cv.pdf'
                        className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"
                    ><FaFilePdf className="text-xl" fill={"#e74c3c"} />
                    </a>
                    <span className="ml-3 dark:text-white">Download my CV</span></span>
                <span className="flex flex-row-reverse items-center" ><button onClick={() => print('cv.pdf')} className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"><FaPrint className="text-xl" fill={"#e74c3c"} /></button><span className="mr-3 dark:text-white">Print my resume</span></span>
            </div>
        </div>
    );
}

export default Home;
