import { Image } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.spaceScene}>
        <Image
          src="astronaut.webp"
          alt="astronaut"
          className={styles.astronaut}
        />
        <h2 className={styles.name}>Mitchell Genova</h2>
      </div>
    </main>
  );
}
