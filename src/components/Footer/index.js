import styles from './styles.module.css'
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";


export default function Footer() {
    return(<footer className={styles.footer}>
        <TiSocialYoutube size={30} color='white' />
        <SlSocialFacebook size={30} color='white'  />
        <SlSocialInstagram size={30} color='white'  />
    </footer>)
}