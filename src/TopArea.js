import './TopArea.css';
import LoginButton from './LoginButton.js';


function TopArea(props) {


   return (
     <div className = "TopArea-main-div">
        <img src="../images/diane-1.png" alt="professor" className='diane' />
        <h1 className="title">MAM</h1>
        <LoginButton onClick={props.handleClick} label="Login" />
     </div>
   );
 }
 
 export default TopArea;