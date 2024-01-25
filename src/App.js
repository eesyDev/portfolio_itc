import React from 'react';
import { Header, Footer, Hero, Info, Portfolio, RequestForm, Reviews, Specs, FAQ } from './components';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Specs/>
      <RequestForm/>
      <Reviews/>
      <FAQ/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
