import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryLihatPageRoutingModule } from './diary-lihat-routing.module';

import { DiaryLihatPage } from './diary-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryLihatPageRoutingModule
  ],
  declarations: [DiaryLihatPage]
})
export class DiaryLihatPageModule {}
