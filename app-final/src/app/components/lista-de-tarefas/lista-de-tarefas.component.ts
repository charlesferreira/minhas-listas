import { Component, Input } from '@angular/core';
import { ListaDeTarefas } from 'src/app/model/lista-de-tarefas';
import { Tarefa } from 'src/app/model/tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css'],
})
export class ListaDeTarefasComponent {
  @Input() lista: ListaDeTarefas;

  onAdicionarTarefa() {
    const novaTarefa = { nome: '', concluida: false };
    this.lista.tarefas = [novaTarefa, ...this.lista.tarefas];
  }

  ordenarLista() {
    this.lista.tarefas = [
      ...this.lista.tarefas.filter(t => !t.concluida),
      ...this.lista.tarefas.filter(t => t.concluida),
    ];
  }

  onExcluirTarefa(tarefa: Tarefa) {
    this.lista.tarefas = [...this.lista.tarefas.filter(t => t !== tarefa)];
  }
}
