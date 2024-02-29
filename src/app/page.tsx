import styles from "@/app/page.module.css";
import Circle from "@/components/circle/circle";
import Column from "@/components/column/column";
import Links from "@/components/links/links";
import Portfolio from "@/components/portfolio/portfolio";
import Row from "@/components/row/row";

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
