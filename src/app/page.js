"use client";

import styles from './home.module.css';
import Image from 'next/image';
import { IoMailOpenOutline } from "react-icons/io5";
import { useState } from 'react';


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.introduction}>
          Hello, my name is
        </p>
        <h1 className={styles.title}>
          Hubert Maximus.
        </h1>
        <p className={styles.desc}>
          I created this website to showcase my skills and projects.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? <IoMailOpenOutline className={styles.mail}/> : "Contact"}
            </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/giphy.gif" alt="Home" fill className={styles.heroImg} unoptimized/>
      </div>
    </div>
  );
};

export default Home;