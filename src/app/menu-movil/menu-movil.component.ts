import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { FuncionesGeneralesService } from '../funciones-generales.service';
import { ProductosService } from '../productos.service';


const rightToLeft = trigger('rightToLeft', [
  state('start', style({
      transform: 'translateX(0px)'
  })),
  state('end', style({
      transform: 'translateX(-450px)'
  })),
  transition('start <=> end', animate('0.3s ease-out'))
]);

const cambioColor = trigger('cambioColor', [
  state('start', style({
    backgroundColor: 'rgba(0, 0, 0, 0.145)'
  })),
  state('end', style({
    backgroundColor: 'rgba(0, 0, 0, 0)'
  })),
  transition('start <=> end', animate('0.3s'))
]);


@Component({
  selector: 'app-menu-movil',
  templateUrl: './menu-movil.component.html',
  styleUrls: ['./menu-movil.component.scss'],
  animations: [rightToLeft, cambioColor]
})
export class MenuMovilComponent {

  @ViewChild('fondo', { static: true }) fondo!: ElementRef;
  state: string = 'start';
  isAnimationDone: boolean = false;
  loading: boolean = true;
  categorias: string[] = [];

  
  constructor (public serviceFunciones: FuncionesGeneralesService, public serviceProductos: ProductosService) {
    this.categorias = this.serviceProductos.getCategorias();
  }


  animacionCerrarMenu() {
    this.state = this.state === 'start' ? 'end' : 'start';
  }


  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'end') {
      this.isAnimationDone = true;
      this.serviceFunciones.toggleAbrirMenu();
    }
  }

  
}
