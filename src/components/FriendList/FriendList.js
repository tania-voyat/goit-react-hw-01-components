import React from "react";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FriendList;
