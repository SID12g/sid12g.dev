import styles from "@/styles/Circle.module.css";

export default function Circle() {
  return (
    <div className={styles.wrap}>
      <div className={styles.circle}></div>
      <div className={styles.square}></div>
    </div>
  );
}
