import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-bookmark-lihat',
  templateUrl: './bookmark-lihat.page.html',
  styleUrls: ['./bookmark-lihat.page.scss'],
})
export class BookmarkLihatPage implements OnInit {
  id: any;
  judul: any;
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
      this.AmbilDataBookmark(this.id);
    });
  }

  ngOnInit() {}

  AmbilDataBookmark(id: any) {
    this._apiService.ambilDataBookmark(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let data = res;
        this.id = data.id;
        this.judul = data.judul;
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
