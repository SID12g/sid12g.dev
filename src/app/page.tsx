import Links from "@/components/Links";
import Portfolio from "@/components/Portfolio";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.id}>sid12g</h1>
      <p className={styles.name}>조성민</p>
      <Portfolio />
      <Links />
    </div>
  );
}
