import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AppProvider} from './context'
import Loading from "./components/Loader/Loader";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';



ReactDOM.render(
  <AppProvider>
    <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div><Loading/></div>}> 
    <App />
    {/* <Loading/> */}
    </Suspense>
    </I18nextProvider>
  </AppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
