import React from 'react';
import logo from './logo.svg';
import { FaFacebookF, FaFilePdf, FaGoogle, FaInstagram, FaInstagramSquare, FaPrint, FaRegSun } from "react-icons/fa";
import './App.scss';
import { Avatar } from './assets';
const colors = require('tailwindcss/colors')
function App() {
  return (
    <div className="App">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-full items-start justify-center" style={{ height: "600px" }}>
          <div className="relative rounded-3xl md:w-6/12 sm:w-10/12 smx:w-10/12 p-6 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark flex justify-center items-center flex-col">
            <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
            <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>
            <div className="flex mt-4">
              <button className="btn-shadow dark:btn-shadow-dark fb rounded-full text-center w-14 h-14"><FaFacebookF className="text-3xl" fill={colors.coolGray[400]} /></button>
              <button className="btn-shadow dark:btn-shadow-dark itg rounded-full text-center w-14 h-14 mx-5"><FaInstagramSquare className="text-3xl" fill={colors.coolGray[400]} /></button>
              <button className="btn-shadow dark:btn-shadow-dark gg rounded-full text-center w-14 h-14"><FaGoogle className="text-3xl" fill={colors.coolGray[400]} /></button>
            </div>
            <div className="absolute bottom-10 2xl:right-20 2xl:left-20 md:right-10 md:left-10 flex items-center justify-between">
              <span className="flex items-center"><button className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"><FaFilePdf className="text-xl" fill={"#e74c3c"} /></button><span className="ml-3">Download my CV</span></span>
              <span className="flex flex-row-reverse items-center"><button className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"><FaPrint className="text-xl" fill={"#e74c3c"} /></button><span className="mr-3">Print my resume</span></span>
            </div>
          </div>
          <div className="rounded-3xl w-4/12 md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark flex items-center flex-col py-10 px-6">
            <div className="wrap-avatar">
              <div className="avatar">
                <img src={Avatar} alt="" />
              </div>
            </div>
            <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">Nam Bùi</h1>
            <h1 className="text-gray-400 dark:text-white font-extrabold tracking-max text-xl">FRONT END DEV</h1>
            <ul>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5">Home</li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5">About</li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5">Portfolio</li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5">Blog</li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5">Contact</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
