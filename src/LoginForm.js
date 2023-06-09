import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
  };

  function handleTwoInOne() {
    props.handleLoginClick();
    props.handleClick2();
  }

  return (
   <div className="login-form-div">
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit" onClick={handleTwoInOne}>Login</button>
    </form>
    </div>
  );
  
}

export default LoginForm;