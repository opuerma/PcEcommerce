import { Injectable } from '@angular/core';

const categorias: string[] = [
  'Portátiles',
  'Smartphones',
  'Tablets',
  'Monitores',
  'Auriculares',
  'Televisores',
  'Periféricos',
  'Impresoras'
];

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getCategorias(): string[] {
    return categorias;
  }

}
