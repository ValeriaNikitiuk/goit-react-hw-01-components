import PropTypes from "prop-types";
import css from './Profile.module.css'

const Profile = props => {
    const {
        avatar,
        name,
        tag,
        location,
        stats: { followers, views, likes }, 
    } = props;
    return <div className={css.profile}>
  <div className={css.description}>
    <img
                src={avatar}
                alt={name}
                className={css.avatar}
    />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

        <ul className={css.stats}>
    <li>
     <span className={css.label}>Followers   |</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views |</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:PropTypes.object.isRequired,

}

Profile.defaultProps = {
    avatar:
    'https://img2.akspic.ru/crops/8/4/6/4/6/164648/164648-kot-kotenok-privlekatelnost-golova-glaz-3840x2160.jpg',
}
export default Profile ;