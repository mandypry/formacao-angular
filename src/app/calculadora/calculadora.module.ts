import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';

// ng module define que é um módulo
@NgModule({
  declarations: [
    CalculadoraComponent,
    CalculadoraRoutingComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService

  ]
})

// criação de uma classe normal
export class CalculadoraModule { }
