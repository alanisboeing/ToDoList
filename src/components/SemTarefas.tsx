import styles from './SemTarefas.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function SemTarefas(){
  return(
    <div className={styles.semTarefasContainer}>
      <img src={Clipboard} alt="Simbolo de uma caderneta." />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}