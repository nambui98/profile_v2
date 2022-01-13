import React, { useState } from 'react'
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import colors from 'tailwindcss/colors'
import { ThemeContext } from '../ThemeContext';
import vietnamimg from '../../assets/img/vietnam.png'
import usaimg from '../../assets/img/united-states.png'
export default function Setting() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const [active, setActive] = useState(false)
    return (<div className={`relative transform duration-500 ${active ? "translate-x-0" : "translate-x-40"}`}>
        <button className="btn-shadow dark:btn-shadow-dark setting -left-56 top-8 rounded-full text-center w-10 h-10" onClick={() => setActive(!active)}>
            <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
        </button>
        <div className={`absolute top-0 right-0 rounded-3xl flex justify-between p-7 shadow-3xl bg-app dark:bg-neutral-800 dark:shadow-4xl`} >
            {/* <div className={`absolute `}> */}

            <button className="mr-2 btn-shadow-darklight btn-setting rounded-full text-center w-12 h-12" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                    <FaSun
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer dark"
                    />
                ) : (
                    <FaMoon
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer light"
                    />
                )}
            </button>
            <button className="ml-2 btn-setting rounded-full text-center w-12 h-12">
                <img src={vietnamimg} alt="" />
                {/* <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} /> */}
            </button>
            {/* </div> */}
        </div>
    </div>
    )
}
