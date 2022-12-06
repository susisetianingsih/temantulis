import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'diary',
    loadChildren: () =>
      import('./diary/diary.module').then((m) => m.DiaryPageModule),
  },
  {
    path: 'diary-tambah',
    loadChildren: () =>
      import('./diary-tambah/diary-tambah.module').then(
        (m) => m.DiaryTambahPageModule
      ),
  },
  {
    path: 'diary-lihat/:id',
    loadChildren: () =>
      import('./diary-lihat/diary-lihat.module').then(
        (m) => m.DiaryLihatPageModule
      ),
  },
  {
    path: 'diary-edit/:id',
    loadChildren: () =>
      import('./diary-edit/diary-edit.module').then(
        (m) => m.DiaryEditPageModule
      ),
  },
  {
    path: 'note',
    loadChildren: () =>
      import('./note/note.module').then((m) => m.NotePageModule),
  },
  {
    path: 'note-tambah',
    loadChildren: () =>
      import('./note-tambah/note-tambah.module').then(
        (m) => m.NoteTambahPageModule
      ),
  },
  {
    path: 'note-edit/:id',
    loadChildren: () =>
      import('./note-edit/note-edit.module').then((m) => m.NoteEditPageModule),
  },
  {
    path: 'note-lihat/:id',
    loadChildren: () =>
      import('./note-lihat/note-lihat.module').then(
        (m) => m.NoteLihatPageModule
      ),
  },
  {
    path: 'daftar',
    loadChildren: () =>
      import('./daftar/daftar.module').then((m) => m.DaftarPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
