
import Image from 'next/image'
import styles from './style.module.scss'


import Link from 'next/link'


export default function Header(props) {

    const { titulo, descricao, imagem } = props

    return (
        <header className={ imagem ? styles.header : styles['header-alt']}>
            <div className={styles['box-texto']}>
                <h1> {titulo} </h1>
                <h3> {descricao} </h3>
            </div>
            <div className={styles['box-img']}>
                <Image height={400} width={500} className={styles.img} src={imagem} alt={titulo} />
            </div>
            <div className={styles['container-btn']}>
                <Link className={styles.btn} href={'/anuncie'}>Quero anunciar</Link>
            </div>
        </header>
    )
}