import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(
    private el: ElementRef
  ) { }

  /**
   * Implementa evento de keyup para o elemento da diretiva
   * @param any $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    const posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra função a ser chamada para atualizar valor na model
   * @param any fn
   */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Registra função a ser chamada para atualizar valores na model para evento touched
   * @param any fn
   */
  registerOnTouched(fn: any): void {
    this.onChange();
  }

  /**
   * Obtém o valor contido na model
   * @param any fn
   */
  writeValue(value: any) {
    this.el.nativeElement.value = value;
  }
}
