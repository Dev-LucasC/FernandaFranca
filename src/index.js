import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/header"
import SobreMim from "./components/SobreMim/sobre"
import Ebook from './components/Ebook/ebook';
import Footer from './components/Footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Header/>
  <SobreMim/>
  <Ebook />

  </div>
);


