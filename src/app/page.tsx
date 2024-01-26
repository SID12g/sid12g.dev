import Column from "@/components/Column";
import Links from "@/components/Links";
import Portfolio from "@/components/Portfolio";
import Row from "@/components/Row";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div>
      <Column />
      <div className={styles.container}>
        <Row>
          <h1 className={styles.id}>sid12g</h1>
        </Row>
        <p className={styles.name}>조성민</p>
        <Portfolio />
        <Links />
      </div>
    </div>
  );
}
