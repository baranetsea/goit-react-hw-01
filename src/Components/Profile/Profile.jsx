import styles from "./Profile.module.css";
export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.li}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
