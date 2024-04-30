import Image from 'next/image';
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image src="/portrait_edited.jpg" alt="Picture of the author" fill/>
            </div>
        </div>
    )

}

export default AboutPage;