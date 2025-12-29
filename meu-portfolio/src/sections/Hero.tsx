import styles from "./Hero.module.css"

export default function Hero(){
    return(
        <section className={styles.hero}>
            <h1>Philipe Lopes</h1>
            <h2>Desenvolvedor Frontend</h2>

            <p>
                Crio interfaces modernas e responsivas com React, JavaScript e TypeScript.
            </p>

            <div className={styles.actions}>
                <a href="#projects">Ver projetos</a>
                <a href="#contact">Contato</a>
            </div>
        </section>
    )
}