import r from '@moraj/react-hyper/r';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import Base from './app/components/Base/Base';
import styles from './global.style';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  r(
    React.StrictMode,
    r(Base, { ...styles() }, r(BrowserRouter, r(Switch, routes(Route, r))))
  ),
  document.getElementById('root')
);
