import React from 'react';
import HeroSection from './Components/HeroSelection/HeroSection';
import Tokenomics from './Components/Tokenomics/TokenomicsSection';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import FallingImages from './Components/FallingImages/FallingImages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <FallingImages />
      <Header />
      <HeroSection />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
