import React, { useState } from "react";
import style from'./lista.module.scss'
import Item from './Item'
import { ITarefa } from "../../types/tarefa";

function Lista ({tarefas}: {tarefas: ITarefa[]}) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
               {tarefas.map((item,index) => (
                   <Item 
                   key={index}
                   tarefa={item.tarefa}
                   tempo={item.tempo}
                   />
               ))}
            </ul>
        </aside>
    )
}

export default Lista;