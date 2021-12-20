
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props) => {

    const name = props.name || 'AppName';
    const links = props.links || [{ link: './home', label: 'Home' }];

    const CheckActive = (link) =>
    {
        const resolved = useResolvedPath(link);
        const match = useMatch({ path: resolved.pathname, end: true });

        return match ? styles.active : '';
    };

    return (
        <header className={styles.header}>
            <h1>{name}</h1>
            <nav>
                <ul>
                    { links.map((value, index) => (
                        <li key={index}>
                            <Link className={CheckActive(value.link)} to={value.link}>{value.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;