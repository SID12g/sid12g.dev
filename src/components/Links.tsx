import Image from "next/image";
import at from "./../../public/icons/at-icon.svg";
import github from "./../../public/icons/github-icon.svg";
import instagram from "./../../public/icons/instagram-icon.svg";
import bookmark from "./../../public/icons/bookmark-icon.svg";
import Link from "next/link";
import styles from "@/styles/Links.module.css";

export default function Links() {
  return (
    <div className={styles.wrap}>
      <Link className={styles.link} href="mailto:sid12g@naver.com">
        <Image src={at} alt="email" width={30} height={30} />
      </Link>
      <Link className={styles.link} href="https://github.com/SID12g">
        <Image src={github} alt="github" width={30} height={30} />
      </Link>
      <Link className={styles.link} href="https://www.instagram.com">
        <Image src={instagram} alt="instagram" width={30} height={30} />
      </Link>
      <Link className={styles.link} href="https://blog.sid12g.dev">
        <Image src={bookmark} alt="bookmark" width={30} height={30} />
      </Link>
    </div>
  );
}
