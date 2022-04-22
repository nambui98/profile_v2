import React, { useEffect, useState } from 'react';
import './App.scss';
import 'boxicons/css/boxicons.min.css'
import { I18n, T } from 'react-polyglot-hooks';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Avatar } from './assets';
import Contact from './pages/contact';
import Home from './pages/home';
import Work from './pages/Work';
import en from './settings/language/en';
import vn from './settings/language/vn';
import { useLanguge } from './containers/LanguageContext';
import Bubbles from './components/bubbles/Bubbles';

import Skills from './pages/Skills';
import { Example } from './components/menu/example';
import Loading from './components/loading/Loading';
import Setting from './containers/Setting';
import Background from './containers/Background';

// ... or any ways to determine current locale

const routes = [
  { path: '*', name: 'Home', Component: <Home /> },
  { path: '/', name: 'Home', Component: <Home /> },
  { path: '/contact', name: 'Contact', Component: <Contact /> },
  { path: '/work', name: 'Work', Component: <Work /> },
  { path: '/skills', name: 'Skills', Component: <Skills /> },
]
function App() {
  const location = useLocation();
  const { languge } = useLanguge();
  const [loading, setLoading] = useState<boolean>(true)
  const phrases: any = {
    en: en,
    vn: vn,
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <I18n locale={languge} phrases={phrases[languge]}>
      <Background>
        {
          loading ?
            <Loading />
            :
            <>
              <div className="fixed right-0 top-0 mr-4 mt-2 md:mt-6 z-10">
                <Setting />
              </div>
              <Bubbles />
              <div className="App relative">
                <Example />
                <div className="flex h-screen w-screen items-center justify-center relative">
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

                    <div className="rounded-3xl w-[300px] md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark flex items-center flex-col py-10 px-6">
                      <div className="wrap-avatar dark:wrap-avatar-dark">
                        <div className="avatar">
                          <img src={Avatar} alt="" />
                        </div>
                      </div>
                      <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">Nam Bùi</h1>
                      <h1 className="text-gray-400 dark:text-white font-extrabold tracking-max text-xl">FRONT END DEV</h1>
                      <ul>
                        <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/"><i className='bx bxs-home-alt-2' ></i><T phrase="home" /></Link></li>
                        <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/work"><i className='bx bxs-briefcase' ></i><T phrase="work" /></Link></li>
                        <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/skills"><i className='bx bxs-archive' ></i><T phrase="skill" /></Link> </li>
                        <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><a href="https://web3-blog.netlify.app/" target="_blank" rel="noreferrer"><i className='bx bxl-blogger' ></i><T phrase="blog" /></a> </li>
                        <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/contact"><i className='bx bxs-contact' ></i><T phrase="contact" /></Link> </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </>
        }
      </Background>




    </I18n >
  );
}

export default App;
