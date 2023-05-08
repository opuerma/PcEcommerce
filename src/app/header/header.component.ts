import { Component } from '@angular/core';
import { CestaService } from '../cesta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (public serviceCesta: CestaService) { }

}
