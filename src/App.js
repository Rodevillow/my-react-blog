import React, { Fragment } from 'react';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';

import bgPng from './assets/images/bg_img.png';

import './assets/scss/app.scss';

function App({ children }) {
  return (
    <Fragment>
      <img className="bg-image" src={bgPng} alt="Computer Sci" />
      <Header />
      <div className="content container">
        {children}
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
