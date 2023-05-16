import { Component, ElementRef, ViewChild } from '@angular/core';
import { CestaService } from '../cesta.service';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { Producto } from '../Producto';
import { FuncionesGeneralesService } from '../funciones-generales.service';


const leftToRight = trigger('leftToRight', [
  state('start', style({
      transform: 'translateX(0px)'
  })),
  state('end', style({
      transform: 'translateX(450px)'
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
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss'],
  animations: [leftToRight, cambioColor]
})
export class CestaComponent {
  @ViewChild('fondo', { static: true }) fondo!: ElementRef;
  articulosCesta: { producto: Producto, cantidad: number }[] = [];
  state: string = 'start';
  isAnimationDone: boolean = false;

  constructor (
    public serviceCesta: CestaService,
    public serviceFunciones: FuncionesGeneralesService
  ) {
    this.articulosCesta = this.serviceCesta.getArticulosCesta();
  }


  animacionCerrarCesta() {
    this.state = this.state === 'start' ? 'end' : 'start';
  }


  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'end') {
      this.isAnimationDone = true;
      this.serviceCesta.toggleAbrirCesta();
    }
  }



}
