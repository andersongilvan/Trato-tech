import { forwardRef } from 'react'
import styles from './styles.module.scss'

 function Input({value, onChage, ref, ...props}) {
    
    return(<input className={styles.input} value={value} onChage={onChage} ref={ref} {...props} />)
} 

export default forwardRef(Input)