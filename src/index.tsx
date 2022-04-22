import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ColorProvider } from './containers/ColorsContext';
import { LangugeProvider } from './containers/LanguageContext';
import { ThemeProvider } from './containers/ThemeContext';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>
        <LangugeProvider>
          <ColorProvider>
            <App />
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
