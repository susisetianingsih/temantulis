import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  id: any;
  judul: any;
  isi: any;
  data: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.data = [];
    this.getDataBookmark();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getDataBookmark();
  }

  getDataBookmark() {
    this._apiService.getDataBookmark().subscribe(
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

  deleteDataBookmark(id: any) {
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
              this._apiService.deleteDataBookmark(id).subscribe(
                (res: any) => {
                  console.log('sukses', res);
                  this.getDataBookmark();
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
