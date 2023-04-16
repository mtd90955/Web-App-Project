import './InMainAreaCenter.css';
import BackgroundVideo from './BackgroundVideo.js';
import LoginForm from './LoginForm.js';

function InMainAreaCenter(props) {
   return (
     <div className="Center-main-div">
       <div className={`my-div ${props.isVisible ? 'visible' : ''}`}>
        <LoginForm />
      </div>
       <BackgroundVideo />
     </div>
   );
 }
 
 export default InMainAreaCenter;