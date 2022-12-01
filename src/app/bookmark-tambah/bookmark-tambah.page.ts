import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-bookmark-tambah',
  templateUrl: './bookmark-tambah.page.html',
  styleUrls: ['./bookmark-tambah.page.scss'],
})
export class BookmarkTambahPage implements OnInit {
  judul: any;
  isi: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  AddDataBookmark() {
    let url = this._apiService.apiURL() + '/tambah_bookmark.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        judul: this.judul,
        isi: this.isi,
      },
    }).then(
      (data) => {
        this.judul = '';
        this.isi = '';
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Berhasil Input data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.router.navigateByUrl('/bookmark');
      },
      (error) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Input data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}
