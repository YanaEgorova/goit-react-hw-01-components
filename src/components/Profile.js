import React from 'react';
import PropTypes from 'prop-types';

function Profile({ name, tag, location, avatar, stats }) {
  // console.log(typeof stats.followers);
  const statsKeys = Object.entries(stats);

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name"> {name} </p>
        <p className="tag"> @ {tag} </p>
        <p className="location"> {location} </p>
      </div>
      <ul className="stats">
        {statsKeys.map(key => (
          <li key={key[0]}>
            <span>{key[0]} </span>
            <span>{key[1]} </span>
          </li>
        ))}
        {/* <li>
          <span className="label"> Followers </span>
          <span className="quantity"> 1000 </span>
        </li>
        <li>
          <span className="label"> Views </span>
          <span className="quantity"> 2000 </span>
        </li>
        <li>
          <span className="label"> Likes </span>
          <span className="quantity"> 3000 </span>
        </li> */}
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar:
    'https://smartlanding.biz/wp-content/uploads/2015/03/kartinki-zaglushki.png',
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.exact({
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ),
};

export default Profile;
