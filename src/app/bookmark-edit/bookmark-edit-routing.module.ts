import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkEditPage } from './bookmark-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarkEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkEditPageRoutingModule {}
