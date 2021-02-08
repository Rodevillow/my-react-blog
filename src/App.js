import React, { Fragment } from 'react';
import './App.css';

import Header from './components/includes/Header';
import Footer from './components/includes/Footer';

function App({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

export default App;
