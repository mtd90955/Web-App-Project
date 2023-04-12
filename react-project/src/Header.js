import Logo from './Logo';
import Name from './Name';
import Login from './Login';
import './Header.css';

function Header () {
  return (
    <div className="header">
      <Logo className="logo"/>
      <Name className="name"/>
      <Login className="login-logup"/>
    </div>
  );
}

export default Header;

