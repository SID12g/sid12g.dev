import styles from "@/styles/Column.module.css";

export default function Column() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.column}></div>
        <div style={{ width: "238px" }}></div>
        <div className={styles.column}></div>
      </div>
    </div>
  );
}
