import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PictureService {

  appId = import.meta.env['VITE_APP_ID'] ?? '';
  accessKey = import.meta.env['VITE_ACCESS_KEY'] ?? '';
  secretKey = import.meta.env['VITE_SECRET_KEY'] ?? '';


  headers = new HttpHeaders()
  .set('Authorization', `Client-ID ${this.accessKey}`)

  private apiUrl = 'https://api.unsplash.com/photos/'

  constructor(private http: HttpClient) {}

  getPictureList(): Observable<any> {
    return this.http.get(this.apiUrl, {headers: this.headers})
  }

}
