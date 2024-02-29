import Circle from "@/components/circle/Circle";
import Column from "@/components/column/Column";
import Links from "@/components/links/Links";
import Portfolio from "@/components/portfolio/Portfolio";
import Row from "@/components/row/Row";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div>
      <Column />
      <div className={styles.container}>
        <Circle />
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
