import './MainArea.css';
import InMainAreaLeftSide from './InMainAreaLeftSide.js';
import InMainAreaRightSide from './InMainAreaRightSide';
import InMainAreaCenter from './InMainAreaCenter';
import BackgroundVideo from './BackgroundVideo';

function MainArea(props) {
   return (
     <div className="MainArea-main-div">
      <InMainAreaLeftSide />

      {/*<BackgroundVideo />*/}
      <InMainAreaCenter isVisible={props.isVisible}/>

      <InMainAreaRightSide />      
     </div>
     
   );
 }
 
 export default MainArea;