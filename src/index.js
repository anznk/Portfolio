import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import { BrowserRouter } from "react-router-dom";

const Loader = () => <div>loading...</div>;

ReactDOM.render(
    <BrowserRouter basename="/cgadmin-react-primeng/">
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>,
    document.getElementById('root'),
);