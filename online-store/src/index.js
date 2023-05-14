import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { Profile } from './components/Profile';
import { EditProfile } from './components/EditProfile';
import { ShoppingCart } from './components/ShoppingCart';
import {Authorized} from './components/Authorized';
import './components/styles/header.css';
import './components/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Authorized><Home /></Authorized>}/>
          <Route path='/registration' element={<Authorized><Registration /></Authorized>} />
          <Route path='/login' element={<Authorized><Login /></Authorized>} />
          <Route path='/main' element={<Authorized><Main /></Authorized>} />
          <Route path='/profile' element={<Authorized><Profile /></Authorized>} />
          <Route path='/edit_profile' element={<Authorized><EditProfile /></Authorized>} />
          <Route path='/shopping_cart' element={<Authorized><ShoppingCart /></Authorized>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
