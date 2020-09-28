import React from "react";
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline, id }) {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item} key={id}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
export default FriendListItem;
