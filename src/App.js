// import logo from './logo.svg';
import './App.css';
import TopArea from './TopArea.js';
import MarqueeArea from './MarqueeArea.js';
import MainArea from './MainArea.js';

import { useState } from 'react';

function App() {

  const [isVisible, slideDown] = useState(false);

  const handleClick = () => {
    slideDown(!isVisible);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       */}
      <TopArea handleClick={handleClick}/>
      <MarqueeArea />
      <MainArea isVisible={isVisible}/>

      </div>
    </div>
  );
}

export default App;
