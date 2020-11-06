import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent {
  @Input() tarefa: Tarefa;

  @Output() alternarStatus = new EventEmitter();

  onAlternarStatus() {
    this.tarefa.concluida = !this.tarefa.concluida;
    this.alternarStatus.emit();
  }
}
