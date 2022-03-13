import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './pages/home'
import Contact from './pages/contact'
import './App.scss';
import { Avatar } from './assets';
const colors = require('tailwindcss/colors')

const routes = [
  { path: '*', name: 'Home', Component: <Home /> },
  { path: '/', name: 'Home', Component: <Home /> },
  { path: '/contact', name: 'Contact', Component: <Contact /> },
]
function App() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          {

            routes.map(({ path, Component }) => (<Route path={path} element={Component} />))
          }
          {/* <Route key={path} path={path}>
            {({ match }: any) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    // <Router>

    //   {routes.map(({ path, Component }) => (
    //     <Route key={path} path={path}>
    //       {({ match }: any) => (
    //         <CSSTransition
    //           in={match != null}
    //           timeout={300}
    //           classNames="page"
    //           unmountOnExit
    //         >
    //           <div className="page">
    //             <Component />
    //           </div>
    //         </CSSTransition>
    //       )}
    //     </Route>
    //   ))}
    // </Router>
  );
}

export default App;
