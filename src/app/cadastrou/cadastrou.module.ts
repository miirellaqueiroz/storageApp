import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrouPageRoutingModule } from './cadastrou-routing.module';

import { CadastrouPage } from './cadastrou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrouPageRoutingModule
  ],
  declarations: [CadastrouPage]
})
export class CadastrouPageModule {}
