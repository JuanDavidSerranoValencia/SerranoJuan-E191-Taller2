import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent  implements OnInit {
  @Output() emitParent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onChangeBuscador(e:Event){
    this.emitParent.emit((e.target as HTMLInputElement).value); 
  }

}
