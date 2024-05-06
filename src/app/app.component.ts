import { Component } from '@angular/core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  component = EncabezadoComponent;

  constructor() { }
}
