import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrouPage } from './cadastrou.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrouPageRoutingModule {}
