import { Component } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent {

  categorias: string[] = [];

  constructor(public serviceProductos: ProductosService) {
    this.categorias = this.serviceProductos.getCategorias();

    
  }

}
