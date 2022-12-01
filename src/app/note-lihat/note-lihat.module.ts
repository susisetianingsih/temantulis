import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteLihatPageRoutingModule } from './note-lihat-routing.module';

import { NoteLihatPage } from './note-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteLihatPageRoutingModule
  ],
  declarations: [NoteLihatPage]
})
export class NoteLihatPageModule {}
