import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Home from './pages/home'
import Contact from './pages/contact'
import './App.scss';
import { Avatar } from './assets';
const colors = require('tailwindcss/colors')

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/contact', name: 'Contact', Component: Contact },
]
function App() {

  return (
    <Router>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path}>
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
        </Route>
      ))}
    </Router>
  );
}

export default App;
