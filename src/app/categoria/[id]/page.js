"use client";
import CardItem from '@/components/CardItens';
import styles from '../style.module.css'
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Categaria() {

    const params = useParams()
    const { id } = params
    


    const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === id))
    console.log('categorias', categoria)

    const itens = useSelector((state) => {
        const regexp = new RegExp(state.busca, 'i')
        return state.itens.filter((item) => item.categoria === id && item.titulo.match(regexp))
    })
       
       
    return (<div>

        <Header
            titulo={categoria.nome}
            descricao={categoria.descricao}
            imagem={categoria.header} alt={categoria.nome}
        />

        <div className={styles['container-itens']}>
            {
                itens.map((item, index) => (
                    <div key={index}>
                        <CardItem {...item} />
                    </div>
                ))
            }

        </div>



    </div>)
}