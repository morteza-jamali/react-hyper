import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { r, helper } from '../src/index';

const { h1, span } = helper();

const App = () =>
  r(
    'h1',
    { className: 'firstClass secondClass', first: "fd" },
    'This is for test'
  );

ReactDOM.render(<App />, document.getElementById('root'));
