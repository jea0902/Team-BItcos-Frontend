import React from 'react';
import './css/App.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './Navbar';
import RoutingComponent from './RoutingComponent';
import Footer from './Footer';

function App() {
  return (
    <div className="App-Container">
      <Navbar />
      <RoutingComponent />
      <Footer />
    </div>
  );
}

export default App;
