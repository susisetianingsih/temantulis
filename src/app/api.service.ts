import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //link API
  apiURL() {
    return 'http://localhost:8080/backtemantulis';
  }

  getDataDiary() {
    return this.http.get(this.apiURL() + '/tampil_diary.php');
  }

  deleteDataDiary(id: any) {
    return this.http.delete(this.apiURL() + '/hapus_diary.php?id=' + id);
  }

  ambilDataDiary(id: any) {
    return this.http.get(this.apiURL() + '/lihat_diary.php?id=' + id);
  }

  getDataNote() {
    return this.http.get(this.apiURL() + '/tampil_note.php');
  }

  deleteDataNote(id: any) {
    return this.http.delete(this.apiURL() + '/hapus_note.php?id=' + id);
  }

  ambilDataNote(id: any) {
    return this.http.get(this.apiURL() + '/lihat_note.php?id=' + id);
  }
}
