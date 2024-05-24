import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Thumb from './Thumb';
import Devloper from './Devloper';
import Contact from './Contact';
import Aboutus from './Aboutus';
import PrivacyPolicy from './PrivacyPolicy';
import Termsandconditions from './Termsandconditions';
import Game from './Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> </Route>
        <Route path="/play" element={<Thumb />}> </Route>
        {/* <Route path="/play" element={<Thumb />}> </Route> */}
        <Route path="/game" element={<Game />}> </Route>
        <Route path="/devloper" element={<Devloper />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/aboutus" element={<Aboutus />}> </Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}> </Route>
        <Route path="/termandconditions" element={<Termsandconditions />}> </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
