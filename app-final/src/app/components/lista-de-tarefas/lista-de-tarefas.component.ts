import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ListaDeTarefas } from 'src/app/model/lista-de-tarefas';
import { Tarefa } from 'src/app/model/tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css'],
})
export class ListaDeTarefasComponent implements AfterViewInit {
  @Input() lista: ListaDeTarefas;
  @Input() editando: boolean;

  @ViewChild('nome') nomeRef: ElementRef;

  @Output() excluir = new EventEmitter();

  ngAfterViewInit() {
    if (!this.lista.nome) {
      this.nomeRef.nativeElement.focus();
    }
  }

  onEditarNome(nome: string) {
    this.lista.nome = nome;

    if (this.lista.tarefas.length === 0) {
      this.onAdicionarTarefa();
    }
  }

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
    this.lista.tarefas = this.lista.tarefas.filter(t => t !== tarefa);
  }

  onExcluirLista() {
    this.excluir.emit();
  }

  onRemoverConcluidas() {
    this.lista.tarefas = this.lista.tarefas.filter(tarefa => !tarefa.concluida);
  }
}
