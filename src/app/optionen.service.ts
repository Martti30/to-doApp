import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Optionen } from './optionen/optionen';



@Injectable({
  providedIn: 'root'
})
export class OptionenService {

  private apiBaseUrl = 'http://localhost:3000/optionen';

  constructor(private http: HttpClient) { }

  getOptionen(): Observable<Optionen> {



    return this.http.get<Optionen>(this.apiBaseUrl);

  }



  updateOptionen(optionen: Optionen): Observable<any> {



    return this.http.put<any>(this.apiBaseUrl, optionen);
    // console.log(entry);
  }
}
