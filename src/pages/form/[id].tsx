import React, { useRef, useState } from 'react'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import { Form } from '@unform/web'

import Header from "../../components/Header";
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import styles from '../../styles/pages/newForm.module.scss'
import stylesInput from '../../styles/components/input.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next';
type FormData = {

}

type CampoQuestion = {
    title: string;
    required: boolean;
}

export default function FormId({id}) {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit: SubmitHandler<FormData> = data => {
        const form = { ...data }
        console.log(form)
    }
    return (
        <div>
            <Header title="Vaga front end">
                <p>Estamos embusca de novos programadores para preencher algumas vagas Front-end em nosso time. Procuramos Dev Jr. com experiencia em React.js ou Vue.js.</p>
            </Header>
            <main className={styles.formContainer}>
            <Form ref={formRef} onSubmit={handleSubmit} >
                    <div className={styles.container}>
                        <h3>Seus dados</h3>
                        <hr />
                        <Scope path="author">
                            <Input label='Nome completo' name="name" required />

                            <Input label="Email" name="email" type="email" required/>

                            <Input label="Telefone" name="telefone" type="tel" required/>
                        </Scope>


                        <h3>Formulario #{id}</h3>
                        <hr />
                        <Scope path="form">
                            <Input label="Qual sua experiencia em React.js?" name="question1" required/>
                            <Input name="question2" label="Conte-nos um pouco de sua trajetoria como desenvolvedor?" />

                            <Input name="question3" label="Quais  tecnologias você ja  teve contato?" />

                            <Input name="question4" label="Tem alguma tecnologia que esteja disposta a aprender?" />
                        </Scope>

                    </div>
                    <footer>
                        <div>
                            <img src="/icons/alert.svg" alt="" />
                            <p>Importante! <br /> Preencha todos os dados</p>
                        </div>

                        <button >Enviar Resposta</button>
                    </footer>
                </Form>
            </main>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { 
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const { id } = ctx.params;

    return { 
        props: {
            id
        },
        revalidate: 60 * 60 * 24
    }
}