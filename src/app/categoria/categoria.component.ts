import { Component, Input } from '@angular/core';
import { ProductosService } from '../productos.service';
import { FuncionesGeneralesService } from '../funciones-generales.service';
import { Producto } from '../Producto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  @Input() categoriaAMostrar: string;
  
  productos: Producto[] = [];
  loading: boolean = true;


  constructor(public serviceProductos: ProductosService, public serviceFunciones: FuncionesGeneralesService ) { }


  async ngOnInit() {
    this.categoriaAMostrar = this.serviceFunciones.primeraLetraCapital(this.categoriaAMostrar);
    this.productos = await this.serviceProductos.getProductosPorCategoria(this.categoriaAMostrar);
  }
  

}
