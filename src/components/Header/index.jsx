
import styles from './Header.module.scss';

const Header = (props) => {

    const name = props.name || 'AppName';
    const links = props.links || [{ link: '/home', label: 'Home' }];

    return (
        <header className={styles.header}>
            <h1>{name}</h1>
            <nav>
                <ul>
                    { links.map((value, index) => (
                        <li key={index}>
                            <a href={value.link}>{value.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;