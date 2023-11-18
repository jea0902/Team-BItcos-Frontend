import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Body from './RoutingComponent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
