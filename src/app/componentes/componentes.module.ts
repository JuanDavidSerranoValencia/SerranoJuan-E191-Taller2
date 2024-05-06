import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListItemPokemonComponent } from './list-item-pokemon/list-item-pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    EncabezadoComponent,
    BuscadorComponent,
    ListItemPokemonComponent,
    ItemPokemonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    EncabezadoComponent,
    BuscadorComponent,
    ListItemPokemonComponent,
    ItemPokemonComponent,
    FooterComponent
  ]
})
export class ComponentesModule { }
