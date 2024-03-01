import ProfileImg from "/public/profile.jpg";

import Styles from "./Profile.module.scss";
import Image from "next/image";

export default function Profile() {
  return (
    <div className={Styles["profile-container"]}>
      <Image
        src={ProfileImg}
        alt="profile img"
        width={92}
        height={92}
        priority
        className={Styles["profile-img"]}
      />
      <h2 className={Styles["title"]}>홍장군의 개발 일지</h2>
      <div className={Styles["info"]}>
        <span className={Styles["field"]}>Frontend Developer</span>
        <span className={Styles["author"]}>Hongjw</span>
      </div>
    </div>
  );
}
