import PropTypes from "prop-types";
import css from './FriendListItem.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem 
                key={id}   
                avatar={avatar}
                name={name}
            isOnline={isOnline} />
        ))}
</ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    )
}

export default FriendList;