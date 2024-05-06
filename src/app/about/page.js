"use client";

import Image from 'next/image';
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <div className={styles.line}/>
                About Me
                <div className={styles.line2}/>
                <div className={styles.line3}/>
            </h1>
            
            <div className={styles.belowContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/pixar style portrait.jpg" alt="Picture of the author" fill/>
                </div>
                <div className={styles.textContainer}>
                    <p>
                        Hello! my name is Aureliano Hubert Maximus. I am a dedicated Software Engineer and an aspiring full stack developer with a strong background 
                        in a diverse array of programming languages and frameworks such as:
                        <div className={styles.listContainer}>
                            <ul>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                                <li>SQL</li>
                            </ul>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>React-Native</li>
                                <li>AWS</li>
                                <li>Android Studio</li>
                            </ul>
                        </div>
                        <br/><br/>
                        A recent graduate with a Bachelor of Science in Computer Science at the University of Kansas, I am passionate about leveraging technology to create 
                        efficient, user-friendly applications. My projects range from a <a className={styles.link} href='https://github.com/DevinRS/Capstone_Project' target="_blank" rel="noopener noreferrer">Machine Learning Web Application </a> 
                        that enhances the accessibility of algorithms, to a <a className={styles.link} href='https://github.com/AurHubertMax/WorkoutTracker' target="_blank" rel="noopener noreferrer">Weightlifting Helper Mobile App</a> that aids gym enthusiasts in tracking their progress. <br/>
                        <br/><br/><br/>
                        I developed this website to not only showcase my projects and technical skills but to also create a platform where I can connect and collaborate 
                        with others in the field. If you have any questions or are interested in working together, please feel free to 
                        <a className={styles.link} href="mailto:ahubertmax@gmail.com"> contact me</a>.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default AboutPage;

