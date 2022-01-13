import { ITarefa } from "../../../types/tarefa";
import style from "./item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item(
{
    id,
    tempo,
    tarefa,
    completado,
    selecionado,
    selecionaTarefa,
}: Props) {
  return (
    <li 
    className={`${style.item} 
    ${selecionado ? style.itemSelecionado : ''} 
    ${completado? style.itemCompletado : ''}`} 
    onClick={() => !completado && selecionaTarefa({
        id,
        tempo,
        tarefa,
        completado,
        selecionado
    })}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
      {completado && 
      <span className={style.concluido}
      aria-Label="tarefa Completada"
      ></span>}
    </li>
  );
}
