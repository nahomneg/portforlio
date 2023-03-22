import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl:string = "https://6egq4ejknj.execute-api.us-east-1.amazonaws.com/prod/contact";


  constructor(private _http: HttpClient) {

  }
  public postMessage(data: FormData): Observable<any>{
    // @ts-ignore
    data['id'] = "3443"
    return this._http.post<any>(this.baseUrl, data, {});
  }
}
