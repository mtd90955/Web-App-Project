//import myVideo from "./vid-moving-1.mp4";
//import myVideo from "./yandex-moving-1.mp4";
//import myVideo from "./main-through-space-1.mp4";
import myVideo from "./earth-rotating-1.mp4"


export default function BackgroundVideo(){
   return (
      
      <div className="container">
         <video autoPlay muted loop className="video-background">
            <source src={myVideo} type="video/mp4" />
         </video>
         <div className="content">

         <h1>Hello World!</h1>
         <p>This is a React app with a video background.</p>
         </div>
      </div> 
   );
}