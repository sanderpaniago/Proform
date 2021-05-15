import Header from "../../components/Header";

import styles from "../../styles/pages/formList.module.scss"

export default function FormsList() {
    return (
        <div>
            <Header title="Estes são os proforms disponíveis."/>
            <main className={styles.container}>
                <header>
                    <div className={styles.filterContainer}>
                        <label htmlFor="">Pesquisar</label>
                        <div>
                            <input type="search" placeholder="Search..."/>
                            <button>
                                <img src="/icons/search-white.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.filterContainer}>
                        <label htmlFor="">Ordenar</label>
                        <div>
                            <select name="" id="">
                                <option value="">Mais Recentes</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className={styles.content}>
                    <ul>
                        <li>
                            <div>
                                <h4>Vaga Front-end Jr.</h4>
                                <p>Estamos embusca de novos programadores para preencher algumas vagas Front-end em nosso time. Procuramos Dev Jr. com experiencia em React.js ou Vue.js.</p>
                            </div>
                            <div>
                                <a href="">
                                    <img src="/icons/confirm.svg" alt="" />
                                    Responder Form
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}