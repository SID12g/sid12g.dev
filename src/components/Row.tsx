import styles from "@/styles/Row.module.css";

export default function Row({ children }: any) {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}></div>
      {children}
      <div className={styles.row}></div>
    </div>
  );
}
