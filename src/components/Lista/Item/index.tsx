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
    className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
        id,
        tempo,
        tarefa,
        completado,
        selecionado
    })}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
}
