import React from 'react'

type Props = {}

export default function Work({ }: Props) {
    return (
        <div className="relative rounded-3xl md:w-6/12 sm:w-10/12 smx:w-10/12 p-6 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark flex justify-center items-center flex-col">
            <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
            <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>

            <div className="absolute bottom-10 2xl:right-20 2xl:left-20 md:right-10 md:left-10 flex items-center justify-between">

            </div>
        </div>
    )
}