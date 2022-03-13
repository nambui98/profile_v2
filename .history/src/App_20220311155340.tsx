import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './pages/home'
import Contact from './pages/contact'
import './App.scss';

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
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
