
import styles from './Footer.module.scss';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>Copyright {year} - Created by Davide Missiato</p>
        </footer>
    )
}

export default Footer;