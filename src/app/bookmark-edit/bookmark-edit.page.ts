import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.page.html',
  styleUrls: ['./bookmark-edit.page.scss'],
})
export class BookmarkEditPage implements OnInit {
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
      this.ambilDataBookmark(this.id);
    });
  }

  ngOnInit() {}

  ambilDataBookmark(id: any) {
    this._apiService.ambilDataBookmark(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let data = res;
        //console.log(mahasiswa);
        this.judul = data.judul;
        this.isi = data.isi;
      },
      (error: any) => {
        console.log('error', error);
        alert('gagal ambil data');
      }
    );
  }

  editDataBookmark() {
    let url = this._apiService.apiURL() + '/edit_bookmark.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        id: this.id,
        judul: this.judul,
        isi: this.isi,
      },
    }).then(
      (data) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Berhasil Edit Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.router.navigateByUrl('/bookmark');
      },
      (err) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Edit Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}
