"use client"

import styles from "./page.module.css";
import Header from "@/components/Header";
import img from '../../public/assets/header.jpg'
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from 'next/navigation'



export default function Home() {
  

  const categorias = useSelector(state => state.categorias)
  const router = useRouter()

  console.log(categorias);

  return (
    <main className={styles.main}>

      <Header home titulo={'Classificados Tech'} descricao={'Compre diversos tipos de produtos no melho site do Brasil'} imagem={img} alt='classificados' />
      <div className={styles['categorias-container']}>
        <h1>Categorias</h1>
        <div className={styles.container}>
          {categorias.map((categoria, index) => (

            <div className={styles['box-categoria']} key={index} onClick={() => router.push(`/categoria/${categoria.id}`)} >
              <Image className={styles.img} src={categoria.thumbnail} alt={categoria.nome} />
              <h2> {categoria.nome} </h2>
            </div>

          ))}
        </div>

      </div>

    </main>
  );
}
