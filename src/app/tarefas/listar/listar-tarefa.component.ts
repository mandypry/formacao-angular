import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  // atributo que armazena as tarefas
  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  // metodo que vai listar todas tarefas
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    // desabilita a ação de atualizar a pagina -> event
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa ' + tarefa.nome + '?')) this.tarefaService.remover(tarefa.id);
    this.tarefas = this.listarTodos();
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    } else {
      this.tarefas = this.listarTodos();
    }
  }
}
