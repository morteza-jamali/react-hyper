import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { r, helper } from '../.';
const { div, span, h1 } = helper(r);

const App = () => h1({}, 'This is for test');

ReactDOM.render(<App />, document.getElementById('root'));
