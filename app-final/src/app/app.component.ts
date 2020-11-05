import { Component } from '@angular/core';

import { ListaDeTarefas } from './model/lista-de-tarefas';

const LISTAS_DE_TAREFAS: ListaDeTarefas[] = [
  {
    nome: 'Tarefas da casa',
    tarefas: [
      { nome: 'Varrer a casa', concluída: false },
      { nome: 'Lavar a louça', concluída: true },
    ],
  },
  {
    nome: 'Lista de mercado',
    tarefas: [
      { nome: 'Feijão', concluída: false },
      { nome: 'Paçoca', concluída: false },
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
}
