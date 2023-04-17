import './MainArea.css';
import InMainAreaLeftSide from './InMainAreaLeftSide.js';
import InMainAreaRightSide from './InMainAreaRightSide';
import InMainAreaCenter from './InMainAreaCenter';
import BackgroundVideo from './BackgroundVideo';

function MainArea(props) {
   return (
     <div className="MainArea-main-div">
      <InMainAreaLeftSide handleAddClick={props.handleAddClick} 
                          handleDeleteClick={props.handleDeleteClick}/>

      {/*<BackgroundVideo />*/}
      <InMainAreaCenter isVisible={props.isVisible} isLeftWindowVisible={props.isLeftWindowVisible}
                        isDeleteWindowVisible={props.isDeleteWindowVisible}
                        handleLoginClick={props.handleLoginClick}
                        handleClick2={props.handleClick2}/>

      <InMainAreaRightSide />      
     </div>
     
   );
 }
 
 export default MainArea;