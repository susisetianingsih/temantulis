import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkLihatPage } from './bookmark-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarkLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkLihatPageRoutingModule {}
