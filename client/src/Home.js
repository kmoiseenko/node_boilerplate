import React from 'react';
import logo from './logo.jpg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://devery.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devery.io
        </a>
        <p>A protocol for product verification on the blockchain</p>
      </header>
    </div>
  );
}

export default Home;
