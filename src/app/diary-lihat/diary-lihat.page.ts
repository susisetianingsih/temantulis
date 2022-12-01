import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-diary-lihat',
  templateUrl: './diary-lihat.page.html',
  styleUrls: ['./diary-lihat.page.scss'],
})
export class DiaryLihatPage implements OnInit {
  id: any;
  tanggal: any;
  isi: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.AmbilDataDiary(this.id);
    });
  }

  ngOnInit() {
    console.log('cek fungsi halaman');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      //this.AmbilDataDiary(this.id);
    });
  }

  AmbilDataDiary(id: any) {
    this._apiService.ambilDataDiary(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let data = res;
        this.id = data.id;
        this.tanggal = data.tanggal;
        this.isi = data.isi;
      },
      (error: any) => {
        console.log('gagal', error);
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal memuat data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}
