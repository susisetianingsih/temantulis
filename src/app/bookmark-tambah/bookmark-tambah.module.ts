import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkTambahPageRoutingModule } from './bookmark-tambah-routing.module';

import { BookmarkTambahPage } from './bookmark-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarkTambahPageRoutingModule
  ],
  declarations: [BookmarkTambahPage]
})
export class BookmarkTambahPageModule {}
