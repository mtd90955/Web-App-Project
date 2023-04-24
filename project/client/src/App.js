import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
// import ErrorPage from './components/ErrorPage';
import { useState, useEffect } from 'react';
import UserContext from './context/UserContext';
import Login from './components/Login';
import axios from 'axios';
import TopArea from './components/TopArea.js';
import MarqueeArea from './components/MarqueeArea.js';
import MainArea from './components/MainArea.js';
import UploadForm from './components/UploadForm';
import Signup from './components/Signup';

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect (() => {
    const checkedLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if(token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenResponse = await axios.post(
        "http://localhost:8000/api/users/tokenIsValid",
        null,
        {headers: {'x-auth-token': token}}
      );
      if (tokenResponse.data) {
        const userRes = await axios.get('http://localhost:8000/', {headers: {'x-auth-token':token}});
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkedLoggedIn();
  }, []);

  // LOGIN BUTTON
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
    <UserContext.Provider value={{userData, setUserData}}>
      <Router>
          <Routes>
            <Route  exact path='/' element={[<TopArea handleClick={handleClick} isLoggedIn={isLoggedIn}/>,
                                          <MarqueeArea />,
                                          <MainArea isVisible={isVisible} 
                    handleAddClick={handleAddClick} isLeftWindowVisible={isLeftWindowVisible}
                    handleDeleteClick={handleDeleteClick} isDeleteWindowVisible={isDeleteWindowVisible}
                    handleLoginClick={handleLoginClick}
                    handleClick2={handleClick2}/>]}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup isVisible={isVisible} handleLoginClick={handleLoginClick}/>}/>
            <Route path='/upload' element={<UploadForm isVisible={isVisible} handleAddClick={handleAddClick}/>}/>
            </Route>
          </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;