import styles from './footer.module.css';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <FaGithub/>
                <FaLinkedin/>
            </div>
            <div className={styles.line}>
            </div>
        </div>
    )

}

export default Footer;