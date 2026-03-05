import styles from './Menu.module.css';

export default function Menu() {
    return (
        <>
            <nav className={styles.navbar}>
                <span className={styles.containerLogo}>
                    <img className={styles.imgLogo} src='./patas.png' />
                    <p className={styles.logo}>Aumigos</p>
                </span>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>Nossas Ongs</li>
                    <li className={styles.navItem}>Cadastre-se</li>
                    <li className={styles.navItem}>Login</li>
                    <li className={styles.navItem}>Contato</li>
                </ul>
            </nav>
        </>
    )
}