import { Tarefa } from "../components/Tarefa";
import { ITarefa } from "./ITarefa";

export interface IListaTarefasProps{
  tarefas: ITarefa[],
  handleDeleteTarefa: (tarefaParaExcluir: string)=>void
}
