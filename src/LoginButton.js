import './LoginButton.css';

function LoginButton(props) {
   var loginLabel;

   if (props.isLoggedIn == true)
      loginLabel = "Logout";
   else
      loginLabel = "Login";

   return (
     <div className = "LoginButton-div">
        <button className = "da-Button" onClick={props.onClick}>{loginLabel}</button>
     </div>
   );
 }
 
 export default LoginButton;