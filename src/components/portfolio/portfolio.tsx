import styles from "@/styles/Portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.button}>
      <Link className={styles.link} href="https://portfolio.sid12g.dev">
        <p className={styles.text}>Portfolio</p>
      </Link>
    </div>
  );
}
