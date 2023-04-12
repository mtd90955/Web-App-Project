import Upload from './Upload';
import Fav from './Fav';
import Playlist from './Playlist';
import './Buttons.css';

function Buttons () {
  return (
    <div className="button">
      <Upload className="upload"/>
      <Fav className="fav"/>
      <Playlist className="playlist"/>
    </div>
  );
}

export default Buttons;
