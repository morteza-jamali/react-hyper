import { r } from '@react-hyper/react-hyper';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import styles from './global.style';

ReactDOM.render(
  r(React.StrictMode, r(App, { ...styles() })),
  document.getElementById('root')
);
