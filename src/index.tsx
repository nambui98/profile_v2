import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './containers/ThemeContext';
import { LangugeProvider } from './containers/LanguageContext';
import Background from './containers/Background';
import Toggle from './containers/ThemeToggle';
import Setting from './containers/Setting';
import { Example } from './components/menu/example';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from './containers/ColorsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>
        <LangugeProvider>
          <ColorProvider>
            <Background>
              <div className="fixed right-0 top-0 mr-4 mt-2 md:mt-6 z-10">
                <Setting />
              </div>
              <Example />
              <App />
            </Background>
          </ColorProvider>
        </LangugeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
