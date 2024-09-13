
import styles from './Header.module.css'
import LogoTodo from '../assets/LogoTodo.svg'

export function Header(){
  return(
    <header className={styles.header}>
        <span>
          <img src={LogoTodo} alt="Logotipo da todo" />
        </span>
        <span className={styles['logo-azul']}>
          to
        </span>
        <span className={styles['logo-roxa']}>
          do
        </span>
    </header>
  )
}