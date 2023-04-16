import './LoginButton.css';

function LoginButton(props) {
   return (
     <div className = "LoginButton-div">
        <button className = "da-Button" onClick={props.onClick}>{props.label}</button>
     </div>
   );
 }
 
 export default LoginButton;