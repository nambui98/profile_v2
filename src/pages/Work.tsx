import React from 'react'
import IOK from '../assets/img/iok.png'
import vtva from '../assets/img/vtva.png'
import bavinn from '../assets/img/bavinn.png'
import nft from '../assets/img/nft.png'
import coin from '../assets/img/coin2.png'
import paralax from '../assets/img/paralax.png'
type Props = {}

export default function Work(props: Props) {
    return (
        <div className="relative rounded-3xl md:w-6/12 scroll-mb-1 p-6 sm:w-10/12 smx:w-10/12 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark ">
            <p className='text-black dark:text-white text-xl text-left font-bold mb-2'>Works</p>
            {/* <img className="w-full" src={IOK} alt="Sunset in the mountains" /> */}
            <div className='w-full h-[calc(100%_-_40px)] overflow-y-auto flex justify-between flex-wrap scrollbar'>

                <a href='https://iok.vn' target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] md:w-full mb-5 dark:border-dark">
                    <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]' src={IOK} alt="" />
                </a>
                <a href='http://172.105.120.33:6004/' target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] md:w-full mb-5 dark:border-dark">
                    <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]' src={bavinn} alt="" />
                </a>
                <a href='https://www.vietravelairlines.com/vn/vi' target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] md:w-full mb-5 dark:border-dark">
                    <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]' src={vtva} alt="" />
                </a>
                <a href='https://nft-flame-phi.vercel.app/' target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] md:w-full mb-5 dark:border-dark">
                    <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]' src={nft} alt="" />
                </a>
                <a href='https://namcoin.vercel.app/' target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] md:w-full mb-5 dark:border-dark">
                    <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]' src={coin} alt="" />
                </a>
                <a href='https://parallaxnambv.netlify.app/' target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] md:w-full mb-5 dark:border-dark">
                    <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]' src={paralax} alt="" />
                </a>
            </div>
        </div>
    )
}