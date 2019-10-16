import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import { Input } from './Input'
import App from './App';
import * as serviceWorker from './serviceWorker';


// console.info('Index', { Input })
export const InputContext = React.createContext(null)

ReactDOM.render(
  <InputContext.Provider value={Input}>
    <App />
  </InputContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
