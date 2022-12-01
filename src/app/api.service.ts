import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //link API
  apiURL() {
    return 'http://localhost/backenda';
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

  getDataBookmark() {
    return this.http.get(this.apiURL() + '/tampil_bookmark.php');
  }

  deleteDataBookmark(id: any) {
    return this.http.delete(this.apiURL() + '/hapus_bookmark.php?id=' + id);
  }

  ambilDataBookmark(id: any) {
    return this.http.get(this.apiURL() + '/lihat_bookmark.php?id=' + id);
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

  getDataTask() {
    return this.http.get(this.apiURL() + '/tampil_task.php');
  }

  deleteDataTask(id: any) {
    return this.http.delete(this.apiURL() + '/hapus_task.php?id=' + id);
  }

  ambilDataTask(id: any) {
    return this.http.get(this.apiURL() + '/lihat_task.php?id=' + id);
  }

  getDataSemuaTask() {
    return this.http.get(this.apiURL() + '/tampilsemua_task.php');
  }

  ambilDataTaskLog() {
    return this.http.get(this.apiURL() + '/tampil_task_log.php');
  }
}
