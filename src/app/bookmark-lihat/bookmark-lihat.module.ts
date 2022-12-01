import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkLihatPageRoutingModule } from './bookmark-lihat-routing.module';

import { BookmarkLihatPage } from './bookmark-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarkLihatPageRoutingModule
  ],
  declarations: [BookmarkLihatPage]
})
export class BookmarkLihatPageModule {}
