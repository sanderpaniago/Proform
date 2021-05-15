import React, { useRef, useState } from 'react'
import {useRouter} from 'next/router'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import { Form } from '@unform/web'

import Header from "../components/Header";
import Input from '../components/Input'
import Textarea from '../components/Textarea'

import styles from '../styles/pages/newForm.module.scss'
import stylesInput from '../styles/components/input.module.scss'

type FormData = {

}

type CampoQuestion = {
    title: string;
    required: boolean;
}

export default function NewForm() {
    const formRef = useRef<FormHandles>(null)

    const routes = useRouter()

    const [campos, setCampos] = useState<CampoQuestion[]>([] as CampoQuestion[])
    const [newCampo, setNewCampo] = useState<CampoQuestion>({ required: false, title: '' })

    const handleSubmit: SubmitHandler<FormData> = data => {
        const form = { ...data, campos }
        console.log(form)

        routes.push('/success-form')
    }

    function addNewCampoQuestion() {
        if (newCampo.title === '') {
            return alert('favor preencher os campos corretamente')
        }

        setCampos([...campos, newCampo])
        setNewCampo({ required: false, title: '' })

        console.log(campos)
    }
    return (
        <div>
            <Header title='Crie formularios incriveis para seu publico'>
                <p>O primeiro passo, é criar os campos de seu formulario.
                    Os campos do formulario são somente texto.</p>
            </Header>

            <div className={styles.formContainer}>
                <Form ref={formRef} onSubmit={handleSubmit} >
                    <div className={styles.container}>
                        <h3>Seus dados</h3>
                        <hr />
                        <Scope path="author">
                            <Input label='Nome completo' name="name" required />

                            <Input label="Email" name="email" type="email" required/>
                        </Scope>


                        <h3>Dados do formulario</h3>
                        <hr />
                        <Scope path="">
                            <Input label="Titulo" name="titulo" required/>
                            <Textarea name="description" label="Descrição" />
                        </Scope>

                        <div className={styles.newCampo}>
                            <h3>Campos</h3>
                            <button type="button" onClick={addNewCampoQuestion}>
                                <img src="icons/plus.svg" alt="" />
                                <span>Novo Campo</span>
                            </button>
                        </div>
                        <hr />

                        <div className={styles.newCampoItem}>
                            <div className={stylesInput.inputContainer}>
                                <label htmlFor="">Titulo do Campo</label>
                                <input type="text" value={newCampo.title} onChange={e => setNewCampo({ ...newCampo, title: e.target.value })} />
                            </div>
                            <div className={stylesInput.inputContainer}>
                                <label htmlFor="required">
                                    <p>Obrigatório?</p>
                                    <input
                                        type="checkbox"
                                        name="required"
                                        id="required"
                                        checked={newCampo.required}
                                        onChange={e => setNewCampo({ ...newCampo, required: e.target.checked })}
                                    />
                                    <span></span>
                                </label>
                            </div>
                        </div>

                        <section className={styles.camposContainer}>
                            <ul>
                                {campos.map((campo, index) => {
                                    return (
                                        <li key={index}>
                                            <div className={styles.textItem}>
                                                <p>{campo.title}</p><span>{campo.required && '*'}</span>
                                            </div>
                                            <div>
                                                <button><img src="/icons/edit.svg" alt="" /></button>
                                                <button><img src="/icons/remove-item.svg" alt="" /></button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    </div>
                    <footer>
                        <div>
                            <img src="/icons/alert.svg" alt="" />
                            <p>Importante! <br /> Preencha todos os dados</p>
                        </div>

                        <button >Salver Form</button>
                    </footer>
                </Form>
            </div>
        </div>
    )
}