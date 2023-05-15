import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  cestaAbierta: boolean = false;
  articulosCesta: Producto[] = [];

  constructor() { }


  toggleAbrirCesta(): void {
    this.cestaAbierta = !this.cestaAbierta;
  }

  getCestaAbierta(): boolean {
    return this.cestaAbierta;
  }


  addArticuloCesta(producto: Producto): void {
    this.articulosCesta.push(producto);
  }

  getArticulosCesta(): Producto[] {
    return this.articulosCesta;
  }


}
