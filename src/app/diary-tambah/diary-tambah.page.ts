import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-diary-tambah',
  templateUrl: './diary-tambah.page.html',
  styleUrls: ['./diary-tambah.page.scss'],
})
export class DiaryTambahPage implements OnInit {
  tanggal: any;
  isi: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  AddDataDiary() {
    let url = this._apiService.apiURL() + '/tambah_diary.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        tanggal: this.tanggal,
        isi: this.isi,
      },
    }).then(
      (data) => {
        this.tanggal = '';
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
        this.router.navigateByUrl('/diary');
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
