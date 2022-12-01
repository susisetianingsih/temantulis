import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkTambahPage } from './bookmark-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarkTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkTambahPageRoutingModule {}
