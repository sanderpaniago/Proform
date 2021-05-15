import styles from '../styles/pages/home.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.homeContainer}>
        <section>
          <div>
            <img src="/logo.svg" alt="" />
            <p>Sua plataforma de formularios online.</p>
          </div>

          <img src="/home.svg" alt="" />
        </section>

        <section>
          <Link href="/new-form">
            <a>
              <img src="/icons/create.svg" alt="" />
              <span>Criar Formulario</span>
            </a>
          </Link>

          <Link href="/form">
            <a>
              <img src="/icons/icon-form.svg" alt="" />
              <span>Responder Formularios.</span>
            </a>
          </Link>

          <p>Total de 12 formularios ja respondidos <img src="/icons/Emoji.svg" alt="" /></p>
        </section>
    </div>
  )
}
