import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import styles from "./Tarefa.module.css";
import { ListaTarefas } from "./ListaTarefas";
import { PlusCircle, Trash } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "../interface/ITarefa";
import stylesTask from "./ListaTarefas.module.css";

export function Tarefa() {
  const [tarefas, setTarefas] = useState([] as ITarefa[]);
  const [novaTarefa, setNovaTarefa] = useState<string>("");
  const [contadorConcluidos, setContadorConcluidos] = useState(0);

  function handleAdicionarTarefa() {
    if (!novaTarefa.trim())
      return alert("Impossível adicionar uma tarefa vazia!");

    setTarefas((prevState) => [
      ...prevState,
      {
        isChecked: false,
        descricao: novaTarefa,
        id: uuidv4(),
      },
    ]);
  }

  useEffect(() => {
    const contador = tarefas.filter(
      (tarefa) => tarefa.isChecked === true
    ).length;
    setContadorConcluidos(contador);
  }, [tarefas]);

  function handleCheckbox(tarefaId: string) {
    const tempTarefa = structuredClone(tarefas);
    const novaTarefa = tempTarefa.map((tarefa) => {
      if (tarefa.id === tarefaId) {
        return {
          ...tarefa,
          isChecked: !tarefa.isChecked,
        };
      }
      return tarefa;
    });

    setTarefas(novaTarefa);
  }

  function handleDeleteTarefa(taskId: string) {
      const tarefasConcluidasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== taskId;
    });
    setTarefas(tarefasConcluidasAtualizadas);
  }

  return (
    <div className={styles.tarefa}>
      <form className={styles.inputGroup}>
        <textarea
          required
          value={novaTarefa}
          onChange={(event)=> setNovaTarefa(event.target.value)}
          id="text-area"
          className={styles.textArea}
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type="button"
          onClick={handleAdicionarTarefa}
          id="submit-button"
          className={styles.botaoCriar}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <ListaTarefas count={tarefas.length} countConclued={contadorConcluidos}>
        {tarefas.length > 0 &&
          tarefas.map((tarefa: ITarefa) => {
            return (
              <div
                key={tarefa.id}
                className={stylesTask.tarefa}
                data-tarefa={tarefa.id}
              >
                <div className={stylesTask.checkbox}>
                  <input
                    onChange={() => handleCheckbox(tarefa.id)}
                    className={stylesTask.checkbox}
                    type="checkbox"
                    id={tarefa.id}
                    checked={tarefa.isChecked}
                  />
                  <label htmlFor={tarefa.id}>{tarefa.descricao}</label>
                </div>

                <button onClick={() => handleDeleteTarefa(tarefa.id)}>
                  <Trash size={16} />
                </button>
              </div>
            );
          })}
      </ListaTarefas>
    </div>
  );
}
