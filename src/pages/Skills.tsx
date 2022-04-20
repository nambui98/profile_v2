import React from 'react'
import reactjs from '../assets/img/reactjs.png'
import nextjs from '../assets/img/nextjs.png'
import flutter from '../assets/img/flutter.png'
import tailwind from '../assets/img/Tailwind.png'
import css3 from '../assets/img/css3.png'
import scss from '../assets/img/scss.png'
import angular from '../assets/img/angular.png'
import net from '../assets/img/net.png'
import sql from '../assets/img/sql.webp'
import html from '../assets/img/html.png'

type Props = {}
type item = {
    title: string,
    link: string,
    image: string,
}
export default function Skills(props: Props) {
    const data: item[] = [
        {
            title: "Reactjs",
            link: "",
            image: reactjs
        },
        {
            title: "Dự án ERP",
            link: "",
            image: nextjs
        },
        {
            title: "Làm phần CMS cho webside đặt vé máy bay",
            link: "",
            image: reactjs
        },
        {
            title: "FE NFT design trên figma",
            link: "",
            image: flutter
        },
        {
            title: "Làm thử đồng coin",
            link: "",
            image: tailwind
        },
        {
            title: "Trang portfolio cá nhân",
            link: "",
            image: css3
        },
        {
            title: "Tran paralax design trên figma",
            link: "",
            image: scss
        },
        {
            title: "Tran paralax design trên figma",
            link: "",
            image: angular
        },
        {
            title: "Tran paralax design trên figma",
            link: "",
            image: net
        },
        {
            title: "Tran paralax design trên figma",
            link: "",
            image: sql
        },
        {
            title: "Tran paralax design trên figma",
            link: "",
            image: html
        },
    ]
    return (
        <div className="relative rounded-3xl md:w-6/12 scroll-mb-1 p-6 sm:w-10/12 smx:w-10/12 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark ">
            <p className='text-black dark:text-white text-xl text-left font-bold mb-2'>Skills</p>
            {/* <img className="w-full" src={IOK} alt="Sunset in the mountains" /> */}
            <div className='w-full h-[calc(100%_-_40px)] overflow-y-auto  grid  gap-3 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 smx:grid-cols-1 scrollbar'>
                {
                    data.map(item => <div className="border mb-5 dark:border-dark">
                        <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] !object-contain' src={item.image} alt="" />
                    </div>)
                }
            </div>
        </div>
    )
}