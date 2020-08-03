import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

//configuração básica de um component
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html', 
  styleUrls: ['./calculadora.component.css']
})

//OnInit ->Ciclo de vida do Angular
export class CalculadoraComponent implements OnInit {

  //Criando atributo calculadoraService para o módulo que pode ser utilizado em qualquer outro método com o 'this'
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    
  }

}
