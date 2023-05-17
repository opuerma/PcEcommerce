import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  
  categorias: string[] = [];


  constructor (public serviceProductos: ProductosService) {
    this.categorias = this.serviceProductos.getCategorias();
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
