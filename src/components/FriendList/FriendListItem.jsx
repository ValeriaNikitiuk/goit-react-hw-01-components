import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return ( <li className={css.item}>
        <span className={css.status}>{isOnline}
           </span>
        <img className={css.avatar} src={avatar } alt={name} width="48" />
        <p className={css.name}>{name}</p>
</li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.oneOf([true, false])
    
}


// function changeOnlineColorSpan() {
//     if ({ isOnline } = true) {
//         StyleSheet.css.status.backgroundColor = green
//     }
//     else { StyleSheet.css.status.backgroundColor = red }
// }
export default FriendListItem;