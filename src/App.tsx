import React from 'react';
import { I18n } from 'react-polyglot-hooks';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { T } from 'react-polyglot-hooks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import { Avatar } from './assets';
import Contact from './pages/contact';
import Home from './pages/home';
import Work from './pages/Work';
import en from './settings/language/en';
import vn from './settings/language/vn';
import { useLanguge } from './containers/LanguageContext';
import Bubbles from './components/bubbles/Bubbles';
import { useColor } from './containers/ColorsContext';

// ... or any ways to determine current locale

const routes = [
  { path: '*', name: 'Home', Component: <Home /> },
  { path: '/', name: 'Home', Component: <Home /> },
  { path: '/contact', name: 'Contact', Component: <Contact /> },
  { path: '/work', name: 'Work', Component: <Work /> },
]
function App() {
  const location = useLocation();
  const { languge, setLanguge } = useLanguge();
  const { color, setColor } = useColor();
  // const [top, setTop] = useState(0);
  // const [left, setLeft] = useState(0);
  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     setTop(e.pageY);
  //     setLeft(e.pageX);
  //   })
  // }, [])
  // You can put translations in separate files
  const phrases: any = {
    en: en,
    vn: vn,
  };
  return (
    <I18n locale={languge} phrases={phrases[languge]}>
      <Bubbles />
      <div className="App">
        {/* <div className="cursor" style={{ top: top, left: left }}></div> */}
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

            <div className="rounded-3xl w-[300px] md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark flex items-center flex-col py-10 px-6">
              <div className="wrap-avatar dark:wrap-avatar-dark">
                <div className="avatar">
                  <img src={Avatar} alt="" />
                </div>
              </div>
              <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">Nam Bùi</h1>
              <h1 className="text-gray-400 dark:text-white font-extrabold tracking-max text-xl">FRONT END DEV</h1>
              <ul>
                <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/"><T phrase="home" /></Link></li>
                <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/work"><T phrase="work" /></Link></li>
                <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><a href="https://namportfolio.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a> </li>
                <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><a href="https://web3-blog.netlify.app/" target="_blank" rel="noreferrer">Blog</a> </li>
                <li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><Link to="/contact">Contact</Link> </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </I18n>
  );
}

export default App;
