// import logo from './logo.svg';
import './App.css';
import TopArea from './TopArea.js';
import MarqueeArea from './MarqueeArea.js';
import MainArea from './MainArea.js';

import { useState } from 'react';

function App() {

  // FOR THE LOGIN BUTTON
  const [isVisible, slideDown] = useState(false);

  const handleClick = () => {
    slideDown(!isVisible);
  };

  const handleClick2 = () => {
    slideDown(!isVisible);
  };

  // FOR THE SUBMIT LOGIN BUTTON
  const [isLoggedIn, changeText] = useState(false);

  const handleLoginClick = () => {
    changeText(!isLoggedIn);
  };

  // FOR THE ADD BUTTON
  const [isLeftWindowVisible, slideRight] = useState(false);

  const handleAddClick = () => {
    slideRight(!isLeftWindowVisible);
  }

  // FOR THE DELETE BUTTON
  const [isDeleteWindowVisible, slideRightDelete] = useState(false);

  const handleDeleteClick = () => {
    slideRightDelete(!isDeleteWindowVisible);
  }


  return (
    <div className="App">
      <div className="App-body">
        
      <TopArea handleClick={handleClick} isLoggedIn={isLoggedIn}/>
      <MarqueeArea />
      <MainArea isVisible={isVisible} 
                handleAddClick={handleAddClick} isLeftWindowVisible={isLeftWindowVisible}
                handleDeleteClick={handleDeleteClick} isDeleteWindowVisible={isDeleteWindowVisible}
                handleLoginClick={handleLoginClick}
                handleClick2={handleClick2}/>

      </div>
    </div>
  );
}

export default App;
