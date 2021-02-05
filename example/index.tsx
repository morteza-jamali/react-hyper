import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { r, helper } from '../src/index';

const { h1, span } = helper();

console.log(r('h5', 'This is a h1 tag'));

const App = () => h1('This is a h1 tag');

ReactDOM.render(<App />, document.getElementById('root'));
