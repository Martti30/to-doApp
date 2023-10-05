import { Injectable } from '@angular/core';
import { Entry } from './entry/entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EntryService {


  private apiBaseUrl = 'http://localhost:3000/entries';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Entry[]> {



    return this.http.get<Entry[]>(this.apiBaseUrl);

  }

  getEntry(entryId: number): Observable<Entry> {

    const url = `${this.apiBaseUrl}/${entryId}`;

    return this.http.get<Entry>(url);
  }

  createEntry(entry: Entry): Observable<any> {


    return this.http.post<any>(this.apiBaseUrl, entry);


  }

  updateEntry(entry: Entry): Observable<any> {

    const url = `${this.apiBaseUrl}/${entry.id}`;

    return this.http.put<any>(url, entry);
    // console.log(entry);
  }

  deleteEntry(entry: Entry): Observable<any> {

    entry.status = "deleted";
    return this.updateEntry(entry);
  }

  archivEntry(entry: Entry): Observable<any> {

    entry.status = "archiv";
    return this.updateEntry(entry);
  }

  erledigenEntry(entry: Entry): Observable<any> {
    entry.erledigt = 1;
    return this.updateEntry(entry);
  }

  deleteAll(): Observable<any> {
    return this.http.put(this.apiBaseUrl, []);

  }
}
