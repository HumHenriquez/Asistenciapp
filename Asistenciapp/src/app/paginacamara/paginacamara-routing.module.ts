import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginacamaraPage } from './paginacamara.page';

const routes: Routes = [
  {
    path: '',
    component: PaginacamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginacamaraPageRoutingModule {}
