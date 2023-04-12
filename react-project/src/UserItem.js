import Card from './Card';
import './UserItem.css';

function UserItem(props) {
    return (
        <Card className='user_class'>
            <img src={props.image} alt={props.name} className='user-class-img'/>
            <h2 className='user-class-name'>{props.name }</h2>
        </Card>
    );
}
export default UserItem;