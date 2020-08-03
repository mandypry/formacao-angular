import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ];

  constructor() { }

  /**
   * Retorna um obseervable contendo os dados a serem exibidos no gráfico
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable( observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}
