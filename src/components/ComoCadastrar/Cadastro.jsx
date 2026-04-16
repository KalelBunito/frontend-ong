import styles from "./Cadastro.module.css"

export default function Cadastro() {
    return (
        <section className={styles.containerRegister}>
            <h1 className={styles.title}>Como cadastrar sua ONG</h1>
            <p className={styles.subtitle}>Em poucos passos você já pode fazer parte da nossa plataforma</p>
            <div className={styles.registerSteps}>
                <div className={styles.stepItem}>
                    <span className={styles.number}>1</span>
                    <h4 className={styles.info}>Acesse "Cadastre-se"</h4>
                    <p className={styles.infoDescription}>Vá até o menu superior e clique na opção de cadastro.</p>
                </div>
                <div className={styles.stepItem}>
                    <span className={styles.number}>2</span>
                    <h4 className={styles.info}>Preencha o formulário</h4>
                    <p className={styles.infoDescription}>Insira os dados da sua ONG de forma simples e rápida.</p>
                </div>
                <div className={styles.stepItem}>
                    <span className={styles.number}>3</span>
                    <h4 className={styles.info}>Aguarde o contato</h4>
                    <p className={styles.infoDescription}>Nossa equipe analisará e entrará em contato com você.</p>
                </div>
            </div>
            <button className={styles.buttonRegister}>Cadastrar minha ONG</button>
        </section>
    )
}