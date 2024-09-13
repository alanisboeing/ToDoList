
import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { Tarefa } from './components/Tarefa'


function App() {

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <Tarefa />
      </div>

    </div>
  )
}

export default App
