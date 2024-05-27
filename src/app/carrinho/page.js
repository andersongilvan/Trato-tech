"use client"
import Header from '@/components/Header'
import styles from './styles.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from '@/components/CardItens'
import { resetarCarrinho } from '@/store/reducers/carrinho'

export default function Carrinho() {

    const dispath = useDispatch(resetarCarrinho)

    const { carrinho, total } = useSelector(state => {

        let total = 0
        const regexp = new RegExp(state.busca, 'i')

        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find((item) => item.id === itemNoCarrinho.id)
            total += (item.preco * itemNoCarrinho.quantidade)
            if(item.titulo.match(regexp)) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade,
                })
            }
            return itens
        }, [])

        return {
            carrinho: carrinhoReduce,
            total
        }
    })

    return (<section className={styles.carrinho}>
        <Header
            titulo='Carrinho de  compras'
            descricao='Confira os produtos que você adicionou no carrinho'
        />

        <div className={styles['container-itens']}>
            {carrinho.map((item, index) => <CardItem key={index} {...item} carrinho />)}     
        </div>
        <div className={styles['container-total']}>
            <strong>Resumo da compra</strong>   
            <span>Subtotal <strong> R$ {total.toFixed(2)} </strong> </span>
        </div>
        <div className={styles['area-btn']}>
            <button className={styles.finalizar} onClick={() => dispath(resetarCarrinho())}>
                    Finalizar compra
            </button>
        </div>
    </section>)
}