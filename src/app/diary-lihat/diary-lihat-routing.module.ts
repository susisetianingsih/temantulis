import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryLihatPage } from './diary-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryLihatPageRoutingModule {}
