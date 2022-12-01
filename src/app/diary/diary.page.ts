import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage {
  id: any;
  tanggal: any;
  isi: any;
  data: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.data = [];
    this.getDataDiary();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getDataDiary();
  }

  getDataDiary() {
    this._apiService.getDataDiary().subscribe(
      (res: any) => {
        console.log('sukses', res);
        this.data = res;
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

  deleteDataDiary(id: any) {
    this.alertController
      .create({
        header: 'perhatian',
        subHeader: 'Yakin menghapus data ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.deleteDataDiary(id).subscribe(
                (res: any) => {
                  console.log('sukses', res);
                  this.getDataDiary();
                },
                (error: any) => {
                  console.log('error', error);
                  this.alertController
                    .create({
                      header: 'Notifikasi',
                      message: 'gagal memuat data',
                      buttons: ['OK'],
                    })
                    .then((res) => {
                      res.present();
                    });
                }
              );
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
