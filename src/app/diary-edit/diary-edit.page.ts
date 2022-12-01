import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.page.html',
  styleUrls: ['./diary-edit.page.scss'],
})
export class DiaryEditPage implements OnInit {
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
      this.ambilDataDiary(this.id);
    });
  }

  ngOnInit() {}

  ambilDataDiary(id: any) {
    this._apiService.ambilDataDiary(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let data = res;
        //console.log(mahasiswa);
        this.tanggal = data.tanggal;
        this.isi = data.isi;
      },
      (error: any) => {
        console.log('error', error);
        alert('gagal ambil data');
      }
    );
  }

  editDataDiary() {
    let url = this._apiService.apiURL() + '/edit_diary.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        id: this.id,
        tanggal: this.tanggal,
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
        this.router.navigateByUrl('/diary');
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
