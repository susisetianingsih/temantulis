import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkEditPageRoutingModule } from './bookmark-edit-routing.module';

import { BookmarkEditPage } from './bookmark-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarkEditPageRoutingModule
  ],
  declarations: [BookmarkEditPage]
})
export class BookmarkEditPageModule {}
