"use client"

import Header from '@/components/Header'
import { useForm } from 'react-hook-form'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cadastrarItem } from '@/store/reducers/itens'
import Input from '@/components/Input'


export default function AnunciePage() {

    const dispath = useDispatch()

    const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })))

    const { register, handleSubmit } = useForm({
        defaultValues: {
            categoria: ''
        }
    })

    function cadastrar(dados) {
        dispath(cadastrarItem(dados))
    }

    return (<section className={styles.container}>
        <Header titulo='Anuncie aqui' descricao='Anuncie seu produto no melho site do Brasil' />
        <form className={styles.form} onSubmit={handleSubmit(cadastrar)} >

            <Input {...register('titulo', { required: true })} placeholder='Nome do produto' alt='nome do produto' />
            <Input {...register('descricao', { required: true })} placeholder='Descrição do produto' alt='descricao do produto' />
            <Input {...register('foto', { required: true })} placeholder='URL da imagem do produto' alt='URL da imagem do produto' />
            <select {...register('categoria', { required: true })}>
                <option value={''} disabled > Selecione a categoria </option>
                {categorias.map((categoria) => <option value={categoria.id} key={categoria.id}> {categoria.id} </option>)}
            </select>
            <Input {...register('preco', { required: true, valueAsNumber: true })} type='number' placeholder='Preço do produto' />

            <button>Cadastrar produto</button>
        </form>
    </section>)
}