import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaPokemonPage } from './tarjeta-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaPokemonPageRoutingModule {}
