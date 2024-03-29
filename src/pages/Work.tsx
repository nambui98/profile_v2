import React, { Suspense } from 'react'
import IOK from '../assets/img/iok.png'
import Befitter from '../assets/img/befitter.png'
import BefitterApp from '../assets/img/befitter_app.jpg'
import vtva from '../assets/img/vtva.png'
import bavinn from '../assets/img/bavinn.png'
import nft from '../assets/img/nft.png'
import coin from '../assets/img/coin2.png'
import paralax from '../assets/img/paralax.png'
import portpolio from '../assets/img/portpolio.png'
import Loading from '../components/loading/Loading'
type Props = {}
type item = {
    title: string,
    link: string,
    image: string,
    type?: string
}
export default function Work(props: Props) {
    const data: item[] = [
        {
            title: "Befitter app",
            link: "http://cdn.befitter.io/downloadapp/ ",
            image: BefitterApp,
            type: 'mobile'
        },

        {
            title: "Befitter website",
            link: "https://befitter.io/",
            image: Befitter
        },
        {
            title: "Iok chương trình thi topik online",
            link: "https://iok.vn",
            image: IOK
        },
        {
            title: "Dự án ERP",
            link: "http://172.105.120.33:6004/",
            image: bavinn
        },
        {
            title: "Làm phần CMS cho webside đặt vé máy bay",
            link: "https://www.vietravelairlines.com/vn/vi",
            image: vtva
        },
        {
            title: "FE NFT design trên figma",
            link: "https://nft-flame-phi.vercel.app/",
            image: nft
        },
        {
            title: "Làm thử đồng coin",
            link: "https://namcoin.vercel.app/",
            image: coin
        },
        {
            title: "Trang portfolio cá nhân",
            link: "https://namportfolio.netlify.app/",
            image: portpolio
        },
        {
            title: "Tran paralax design trên figma",
            link: "https://parallaxnambv.netlify.app/",
            image: paralax
        },
    ]
    return (
        <Suspense fallback={<Loading />}>

            <div className="relative rounded-3xl md:w-6/12 scroll-mb-1 p-6 sm:w-10/12 smx:w-10/12 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark ">
                <p className='text-black dark:text-white text-xl text-left font-bold mb-2'>Works</p>
                {/* <img className="w-full" src={IOK} alt="Sunset in the mountains" /> */}
                <div className='w-full h-[calc(100%_-_40px)] overflow-y-auto flex justify-between flex-wrap scrollbar'>
                    {
                        data.map((item, index) => <>
                            <a href={item.link} title={item.title} target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] w-full mb-5 dark:border-dark h-[240px]">
                                <img className={`w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ${item.type === "mobile" ? '!object-contain' : ''}`} src={item.image} alt="" />
                            </a>

                        </>)
                    }
                </div>
            </div>
        </Suspense>
    )
}