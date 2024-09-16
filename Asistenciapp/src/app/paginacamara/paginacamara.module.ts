import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginacamaraPageRoutingModule } from './paginacamara-routing.module';

import { PaginacamaraPage } from './paginacamara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginacamaraPageRoutingModule
  ],
  declarations: [PaginacamaraPage]
})
export class PaginacamaraPageModule {}
