import { Component, OnInit } from "@angular/core";
import { Contact } from '../../models/contact';
import { ContactService } from '../../contact.service';
import { ContactEntryComponent } from './contact-entry/contact-entry.component';

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent implements OnInit {
  private input: string = "";
  private contacts: Contact[];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts(this.input)
    .subscribe(contacts => this.contacts = contacts);
  }

  handleInput(searchValue: string) {
    this.input = searchValue;
    this.getContacts();
  }
}
