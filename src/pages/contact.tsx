import React from 'react';

import nhan from '../assets/img/nhan.png';
const colors = require('tailwindcss/colors')

export default function contact() {
    return (
        <div className="relative rounded-3xl md:w-6/12 sm:w-10/12 smx:w-10/12 p-6 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark ">
            <div className="border w-full mb-5 dark:border-dark">
                <div className='w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] p-3'>

                    <p className="text-black dark:text-white text-xl text-left font-bold">Địa chỉ: <span className='font-normal'>Hà Nội</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold">Quê quán: <span className='font-normal'>Hưng Yên</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold">Số điện thoại: <span className='font-normal'>0355817589</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold">Mail: <span className='font-normal'>bvnam98@gmail.com</span> </p>
                </div>
            </div>
            <div className="absolute top-10 right-10 border lg:w-[100px] h-[100px] md:w-full mb-5 dark:border-dark">
                <img className='w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] !object-contain' src={nhan} alt="" />
            </div>
            <div className="border w-full h-[400px] mt-5 mb-5 dark:border-dark">
                <iframe className='border-insite dark:border-dark-insite' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9953604658476!2d105.85208121482006!3d20.992823094380373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac12ee34ca35%3A0xa48f99dde993dc90!2zTmcuIEfhu5FjIMSQ4buBLCBIb8OgbmcgVsSDbiBUaOG7pSwgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1649835609336!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, width: "calc( 100% - 20px)", height: "calc( 100% - 20px)" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
