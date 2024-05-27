"use client"

import { mudarBusca, resetarBusca } from '@/store/reducers/busca'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Busca() {

    const busca = useSelector((state) => state.busca)
    const dispath = useDispatch()
    const path = usePathname()

    useEffect(() =>{
        dispath(resetarBusca())
    }, [ path, dispath ])

    return(<div className={styles.busca}>
        <input className={styles.input} placeholder='O que você procura?' value={busca}
            onChange={(e) => dispath(mudarBusca(e.target.value)) }
        />
    </div>)
}