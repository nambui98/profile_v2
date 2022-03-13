import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Home from './pages/home'
import Contact from './pages/contact'
import { Avatar } from './assets';

import './App.scss';

const routes = [
  { path: '*', name: 'Home', Component: <Home /> },
  { path: '/', name: 'Home', Component: <Home /> },
  { path: '/contact', name: 'Contact', Component: <Contact /> },
]
function App() {
  const location = useLocation();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     setTop(e.pageY);
  //     setLeft(e.pageX);
  //   })
  // }, [])
  return (

    <div className="App">
      <div className="cursor" style={{ top: top, left: left }}></div>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-full items-start justify-center" style={{ height: "600px" }}>
          <TransitionGroup component={null}>

            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
              <Routes location={location}>
                {
                  routes.map(({ path, Component }) => (<Route path={path} element={Component} />))
                }
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <div className="rounded-3xl w-4/12 md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark flex items-center flex-col py-10 px-6">
            <div className="wrap-avatar dark:wrap-avatar-dark">
              <div className="avatar">
                <img src={Avatar} alt="" />
              </div>
            </div>
            <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">Nam Bùi</h1>
            <h1 className="text-gray-400 dark:text-white font-extrabold tracking-max text-xl">FRONT END DEV</h1>
            <ul>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/">Home</Link></li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5">About</li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><a href="https://namportfolio.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a> </li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><a href="https://web3-blog.netlify.app/" target="_blank" rel="noreferrer">Blog</a> </li>
              <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/contact">Contact</Link> </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
