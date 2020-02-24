import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className="Profile">
            <div className="Profile-description">
                <img
                    src={avatar}
                    alt="user avatar"
                    className="Profile-avatar"
                />
                <p className="Profile-name"> {name} </p>
                <p className="Profile-tag"> @ {tag} </p>
                <p className="Profile-location"> {location} </p>
            </div>
            <ul className="Profile-stats">
                <li className="Profile-statsItem">
                    <span className="Profile-statsItem--first">Followers</span>
                    <span className="Profile-statsItem--second">{stats.followers}</span>
                </li>
                <li className="Profile-statsItem">
                    <span className="Profile-statsItem--first">Views </span>
                    <span className="Profile-statsItem--second">{stats.views}</span>
                </li>
                <li className="Profile-statsItem">
                    <span className="Profile-statsItem--first">Likes </span>
                    <span className="Profile-statsItem--second">{stats.likes} </span>
                </li>
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
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;
