import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  
  categorias: string[] = [];
  categoriaSeleccionada: string = 'todo';
  mostrarTodo = true;


  constructor (public serviceProductos: ProductosService, private route: ActivatedRoute) {
    this.categorias = this.serviceProductos.getCategorias();
    this.categoriaSeleccionada = this.route.snapshot.paramMap.get('categoria') ?? 'todo';

    if (this.categoriaSeleccionada.toLowerCase() === 'todo') {
      this.mostrarTodo = true;
    }
    else {
      this.mostrarTodo = false;
    }
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
