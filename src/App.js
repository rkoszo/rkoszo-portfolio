import React from 'react';

import { Navbar } from './components';
import { Footer, Header } from './container';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
