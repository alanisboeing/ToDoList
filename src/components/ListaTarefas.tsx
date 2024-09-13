import { ReactNode } from 'react'
import styles from './ListaTarefas.module.css'
import { SemTarefas } from './SemTarefas'

interface IListaTarefas {
  count: number
  countConclued: number
  children: ReactNode
}

export function ListaTarefas({ count, countConclued, children }: IListaTarefas) {
  
  return (

    <main className={styles.listaContainer}>
      <header>
        <div className={styles.tarefasInfo}>
          <p className={styles.tarefasCriadas}>Tarefas criadas</p>
          <span>{count}</span>
        </div>
        <div className={styles.tarefasInfo}>
          <p className={styles.tarefasConcluidas}>Concluidas</p>
          <span>{countConclued} de {count}</span>
        </div>
      </header>
      <section className={styles.listaTarefas}>
        {children}
        {
          count === 0 && <SemTarefas />
        }

      </section>

    </main>
  )
}