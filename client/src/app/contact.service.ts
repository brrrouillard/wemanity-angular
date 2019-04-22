import { Injectable } from "@angular/core";
import { Contact } from "./contact.class";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  private contactsUrl: string = "https://wemanity-kata.herokuapp.com/contacts/";
  private contacts: Contact[];

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getContacts(input): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl + input);
  }

  getContact(id): Observable<Contact> {
    return this.http.get<Contact>(this.contactsUrl + "/id/" + id);
  }

  addContact(contact) {
    return this.http.post(this.contactsUrl, contact, this.httpOptions);
  }

  updateContact(id, contact) {
    return this.http.put(this.contactsUrl + id, contact, this.httpOptions);
  }
}
