import styles from './Menu.module.css';

export default function Menu(){
    return(
        <>
        <nav className={styles.navbar}>
            <p className={styles.logo}>Nome da Ong</p>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Nossas Ongs</li>
                <li className={styles.navItem}>Cadastre-se</li>
                <li className={styles.navItem}>Perfil</li>
                <li className={styles.navItem}>Contato</li>
            </ul>
        </nav>
        </>
    )
}