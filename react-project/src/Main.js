import Buttons from './Buttons';
import Home from './Home';
import Search from './Search'
import './Main.css';

function Main () {
  return (
    <div className="main">
      <Buttons className="button"/>
      <Home className="home"/>
      <Search className="search"/>
    </div>
  );
}

export default Main;
