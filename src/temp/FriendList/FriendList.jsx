import styles from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendslist}>
      {friends.map((friend) => {
        return (
          <li className={styles.list} key={friend.id}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
