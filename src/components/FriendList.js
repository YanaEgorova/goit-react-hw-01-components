import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
    console.log(friends);
    return (
        <ul className="FriendList-list">
            {' '}
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}{' '}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
