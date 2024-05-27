

import styles from './style.module.scss'
import logo from './assets/TRATOTECH.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoHome } from "react-icons/io5";
import { BsCart3,BsCartFill } from "react-icons/bs";

import Busca from '../CampoBusca';

import { usePathname } from 'next/navigation';


export default function Navbar() {

    const url = usePathname()

    return (<nav className={styles.nav}>
        <Image src={logo} />
        <div className={styles.links}>
            {url === '/' ? <IoHome size={30} color='white' /> : <Link className={styles['link-home']} href={'/'}>Home</Link>}
            <Link href={'/carinho'}></Link>
            {
                url === '/carrinho' ? <BsCartFill size={30} color='white' /> :<Link href={'/carrinho'}> <BsCart3 size={30} color='white' /> </Link> 
            }
        </div>
        <div className={styles.busca}>
            <Busca />
        </div>
    </nav>)
}