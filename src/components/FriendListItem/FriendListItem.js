import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="FriendListItem-item">
      <span
        className="FriendListItem-status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
      </span>
      <img className="FriendListItem-avatar" src={avatar} alt="" width="48" />
      <p className="FriendListItem-name"> {name} </p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://smartlanding.biz/wp-content/uploads/2015/03/kartinki-zaglushki.png',
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
