import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefPageRoutingModule } from './pref-routing.module';

import { PrefPage } from './pref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefPageRoutingModule
  ],
  declarations: [PrefPage]
})
export class PrefPageModule {}
