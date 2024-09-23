// import styles from "./Profile.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem />
          </li>
        );
      })}
    </ul>
  );
}
