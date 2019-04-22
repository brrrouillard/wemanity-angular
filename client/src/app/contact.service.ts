import { Injectable } from '@angular/core';
import { Contact } from './contact.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsUrl: string = "https://wemanity-kata.herokuapp.com/contacts/";
  private contacts: Contact[] = [
    {
      id: "fefefe",
      firstName: "Matthieu",
      lastName: "Brouillard",
      number: "+32 04 70699140"
    },
    {
      id:"fefqsfqs",
      firstName: "Matthieu",
      lastName: "Brouillard",
      number: "+32 04 70699140"
    }
  ];

  constructor(private http: HttpClient) { }

  getContacts(input): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl + input);
  }

  getContact(id): Contact {
    //return this.http.get<Contact>(this.contactsUrl)
  }
}
