import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
// internal
import ScrollTop from "./components/common/ScrollTop";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./App";
import ReactGA from 'react-ga4';

const root = ReactDOM.createRoot(document.getElementById("root"));
//Initialize GA4
ReactGA.initialize("G-2C81Y8CLGR");
ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
root.render(
  <BrowserRouter>


    <ScrollTop />
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
