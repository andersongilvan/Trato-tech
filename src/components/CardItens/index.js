"use client"
import styles from './styles.module.scss'

import { FaHeart, FaShoppingCart, FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { mudarFavorito, mudarItem } from '@/store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from '@/store/reducers/carrinho';

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Image from 'next/image';
import { useState } from 'react';
import Input from '../Input';




export default function CardItem(props) {


    const {
        titulo,
        foto,
        preco,
        descricao,
        favorito,
        id,
        key,
        carrinho,
        quantidade

    } = props

    const [modoDeEdicao, setModoDeEdicao] = useState(false)
    const [novoTitulo, setNovoTitulo] = useState(titulo)

    const dispath = useDispatch()
    const estaNoCarrinho = useSelector((state) => state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id === id))

    function resolverFavorito() {
        dispath(mudarFavorito(id))
    }

    function resolverCarrinho() {
        dispath(mudarCarrinho(id))
    }

   


    return (
        <div key={key} className={!carrinho ? styles['card-item'] : styles['card-no-carrinho']}>
            <div className={styles['container-img']}>
                <Image width={500} height={400} className={styles.img} src={foto} alt={titulo} />
            </div>
            <div className={styles.info}>
                <div className={styles.titulo}>
                    {
                        modoDeEdicao ? <Input value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} /> : <h3> {titulo} </h3>
                    }
                </div>
                <div className={styles.desc}>
                    <p> {descricao} </p>
                </div>

                <div className={styles.preco}>
                    <span> R${preco} </span>
                </div>
            </div>

            <div className={styles['container-acoes']}>

                {
                    favorito ? <FaHeart size={20} color='red' onClick={resolverFavorito} /> : <FaHeart size={20} color='black' onClick={resolverFavorito} />
                }
                {
                    carrinho
                        ?
                        (<div className={styles.quantidade}>
                            quantidade:
                            <FaMinusCircle size={20} onClick={() => {
                                if (quantidade >= 1) dispath(mudarQuantidade({ id, quantidade: -1 }))
                            }} />
                            <span> {String(quantidade, 0).padStart(2, '0')} </span>
                            <FaPlusCircle size={20} onClick={() => dispath(mudarQuantidade({ id, quantidade: +1 }))} />
                        </div>)
                        : <>
                            <FaShoppingCart color={estaNoCarrinho ? 'red' : 'black'} size={20}
                                onClick={resolverCarrinho} />
                           
                        </>

                }
            </div>
        </div>)
}