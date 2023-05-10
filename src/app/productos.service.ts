import { Injectable } from '@angular/core';
import { Producto } from './Producto';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

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

  private _jsonURL = '../assets/productos.json';
  private productos: Producto[] = [];


  constructor(private http: HttpClient) { }


  async getProductos(): Promise<Producto[]> {
    if (this.productos && this.productos.length > 0) {
      return this.productos;
    } else {
      const productos = await firstValueFrom(this.http.get<Producto[]>(this._jsonURL));
      this.productos = productos;
      
      return productos;
    }
  }


  getCategorias(): string[] {
    return categorias;
  }


}
