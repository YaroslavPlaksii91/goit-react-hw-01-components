import PropTypes from 'prop-types';

export const Profile = ({ userName, userTag, location, imgUrl, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <div className="description">
        <img src={imgUrl} alt="User avatar" className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{userTag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
