import React from 'react';
import './sass/style.scss';
import Header from './components/header';
import MainSlider from './components/main-slider/main-slider';
import Services from './components/services/services';
import CreditCalculator from './components/credit-calculator/credit-calculator';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainSlider/>
      <Services/>
      <CreditCalculator/>
    </div>
  );
}

export default App;
