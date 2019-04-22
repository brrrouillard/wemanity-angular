import { Component, OnInit } from "@angular/core";
import { Contact } from '../../contact.class';
import { ContactService } from '../../contact.service';

@Component({
  selector: "app-contacts-container",
  templateUrl: "./contacts-container.component.html",
  styleUrls: ["./contacts-container.component.css"]
})
export class ContactsContainerComponent implements OnInit {
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
