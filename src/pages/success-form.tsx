import styles from '../styles/pages/successForm.module.scss'
import Link from 'next/link'

export default function successForm() {
    return (
        <main className={styles.container}>
            <div className={styles.bg}>
                <div className={styles.content}>
                    <img src="/icons/Feito.svg" alt="" />
                    <h2>Formulario salvo!</h2>
                    <p>Tudo certo, seu formulario está na nossa lista.
                        Agora é só compartilhar o link para seus amigos
                        Para que eles possam responder.</p>
                    <div className={styles.buttons}>
                        <a href="">Copiar Link</a>
                        <Link href="/form">
                            <a>Acessar Lista</a>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}