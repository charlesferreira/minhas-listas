import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeTarefasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
