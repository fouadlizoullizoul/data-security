import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import RecoveryPage from './Routes/RecoveryPage';
import CloudPage from './Routes/CloudPage';
import ContactPage from './Routes/ContactPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/recovery' element={<RecoveryPage/>}/>
      <Route path='/cloud' element={<CloudPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
