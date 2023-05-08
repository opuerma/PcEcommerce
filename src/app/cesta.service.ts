import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  cestaAbierta: boolean = false;
  articulosCesta: string[] = [];

  constructor() { }


  toggleAbrirCesta(): void {
    this.cestaAbierta = !this.cestaAbierta;
  }

  getCestaAbierta(): boolean {
    return this.cestaAbierta;
  }


  addArticuloCesta(producto: string): void {
    this.articulosCesta.push(producto);
  }

  getArticulosCesta(): string[] {
    return this.articulosCesta;
  }


}
