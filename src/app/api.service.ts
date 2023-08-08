import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}
  sendMessage(body: any) {
    const headers = new HttpHeaders({
      'token': 'ccf9af79-a1b4-45be-bc3b-e36cc90f66ef'
    });
    return this.http.post<Array<any>>(
      'https://api.writesonic.com/v1/botsonic/botsonic/generate/016fa399-5ed8-4a65-ae65-f6ad3efc7ddc',
      body,
      { headers }
    );
  }
}
