import React from 'react';
import './sass/style.scss';
import Header from './components/header';
import MainSlider from './components/main-slider/main-slider';
import Services from './components/services/services';
import CreditCalculator from './components/credit-calculator/credit-calculator';
import Map from './components/map';
import Footer from './components/footer';


function App() {
  return (
    <div className="app">
      <Header/>
      <main className="app__main">
        <MainSlider/>
        <Services/>
        <CreditCalculator/>
        <Map/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
