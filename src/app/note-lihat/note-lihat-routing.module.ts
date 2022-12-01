import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteLihatPage } from './note-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: NoteLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteLihatPageRoutingModule {}
