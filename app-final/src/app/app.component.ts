import { Component } from '@angular/core';

import { ListaDeTarefas } from './model/lista-de-tarefas';

const LISTAS_DE_TAREFAS: ListaDeTarefas[] = [
  {
    nome: 'Tarefas da casa',
    tarefas: [
      { nome: 'Varrer a casa', concluida: false },
      { nome: 'Lavar a louça', concluida: true },
    ],
  },
  {
    nome: 'Lista de mercado',
    tarefas: [
      { nome: 'Feijão', concluida: false },
      { nome: 'Paçoca', concluida: false },
    ],
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listasDeTarefas = LISTAS_DE_TAREFAS;

  onCriarLista() {
    const novaLista: ListaDeTarefas = { nome: '', tarefas: [] };
    this.listasDeTarefas = [novaLista, ...this.listasDeTarefas];
  }
}
