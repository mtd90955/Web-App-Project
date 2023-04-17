import './InMainAreaCenter.css';
import BackgroundVideo from './BackgroundVideo.js';
import LoginForm from './LoginForm.js';
import UploadForm from './UploadForm.js';
import DeleteForm from './DeleteForm.js';
import MusicBox from './MusicBox.js';

function InMainAreaCenter(props) {
   return (
     <div className="Center-main-div">

      {/* THESE ARE THE TRANSLUCENT DIVS*/}
      <div className={`my-div ${props.isVisible ? 'visible' : ''}`}>
        <LoginForm handleLoginClick={props.handleLoginClick} 
                   handleClick2={props.handleClick2} isVisible={props.isVisible} />
      </div>
      <div className={`my-div-2 ${props.isLeftWindowVisible ? 'visible' : ''}`}>
        <UploadForm />
      </div>
      <div className={`my-div-3 ${props.isDeleteWindowVisible ? 'visible' : ''}`}>
        <DeleteForm />
      </div>

      {/* ALWAYS PRESENT DIVS */}
      <div className="music-area-div">
         <MusicBox />
      </div>
      <div className="background-video-div">
       <BackgroundVideo />
      </div>
     </div>
   );
 }
 
 export default InMainAreaCenter;