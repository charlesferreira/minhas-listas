import { Component } from '@angular/core';

import { ListaDeTarefas } from './model/lista-de-tarefas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listasDeTarefas: ListaDeTarefas[] = [];
  modoEdicaoAtivo = false;

  onCriarLista() {
    const novaLista: ListaDeTarefas = { nome: '', tarefas: [] };
    this.listasDeTarefas = [novaLista, ...this.listasDeTarefas];
  }

  alternarModoEdicao() {
    this.modoEdicaoAtivo = !this.modoEdicaoAtivo;
  }

  onExcluirLista(lista: ListaDeTarefas) {
    this.listasDeTarefas = this.listasDeTarefas.filter(l => l !== lista);

    if (this.listasDeTarefas.length === 0 && this.modoEdicaoAtivo) {
      this.alternarModoEdicao();
    }
  }
}
