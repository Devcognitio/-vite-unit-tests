import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://example.com/api/contacts';

  constructor(private http: HttpClient) { }

  saveContacts(contacts: any[]): Observable<any> {
    return this.http.post(this.apiUrl, contacts);
  }
}
