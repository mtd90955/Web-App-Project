import './InMainAreaLeftSide.css';

function InMainAreaLeftSide(props) {
   return (
     <div className="LeftSide-main-div">
      <button className="add-button" onClick={props.handleAddClick}>
        <img src="./images/add-icon-light-gray.png" className="add-button-icon"/>
      </button>
      <button className="del-button" onClick={props.handleDeleteClick}>
        <img src="./images/delete-icon-2.png" className="delete-button-icon"/>
      </button>
     </div>
   );
 }
 
 export default InMainAreaLeftSide;