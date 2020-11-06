import { Component, Input, OnInit } from '@angular/core';
import { ListaDeTarefas } from 'src/app/model/lista-de-tarefas';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css'],
})
export class ListaDeTarefasComponent implements OnInit {
  @Input() lista: ListaDeTarefas;

  constructor() {}

  ngOnInit(): void {}
}
