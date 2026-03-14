import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import OpeningHours from './components/OpeningHours';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <OpeningHours />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
