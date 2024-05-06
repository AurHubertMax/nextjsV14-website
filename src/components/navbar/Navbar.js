import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
            </div>
            <div className={styles.links}>
                <div className={styles.homepageLink}>
                </div>
                <div className={styles.otherLinks}>
                    <Links />
                </div>
                
            </div>
        </div>
    )

}

export default Navbar;