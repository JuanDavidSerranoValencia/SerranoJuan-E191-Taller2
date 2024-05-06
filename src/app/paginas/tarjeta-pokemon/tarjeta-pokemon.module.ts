import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaPokemonPageRoutingModule } from './tarjeta-pokemon-routing.module';

import { TarjetaPokemonPage } from './tarjeta-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaPokemonPageRoutingModule
  ],
  declarations: [TarjetaPokemonPage]
})
export class TarjetaPokemonPageModule {}
