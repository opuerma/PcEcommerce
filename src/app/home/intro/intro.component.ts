import { Component } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  categorias: string[] = [];
  loading: boolean = true;

  constructor(public serviceProductos: ProductosService) {
    this.categorias = this.serviceProductos.getCategorias();
  }

}
