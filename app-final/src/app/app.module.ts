import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';
import { TarefaComponent } from './components/lista-de-tarefas/tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeTarefasComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
