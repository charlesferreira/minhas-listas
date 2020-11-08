import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements AfterViewInit {
  @Input() tarefa: Tarefa;

  @ViewChild('nome') nomeRef: ElementRef;

  @Output() alternarStatus = new EventEmitter();
  @Output() excluir = new EventEmitter();

  ngAfterViewInit() {
    if (!this.tarefa.nome) {
      this.nomeRef.nativeElement.focus();
    }
  }

  onEditarNome(nome: string) {
    this.tarefa.nome = nome;
  }

  onAlternarStatus() {
    this.tarefa.concluida = !this.tarefa.concluida;
    this.alternarStatus.emit();
  }

  onExcluir() {
    this.excluir.emit();
  }
}
