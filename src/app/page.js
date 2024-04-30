import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          TITLE
        </h1>
        <p className={styles.desc}>
          PARAGRAPH
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brands" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/giphy.gif" alt="Home" fill className={styles.heroImg} unoptimized/>
      </div>
    </div>
  );
};

export default Home;