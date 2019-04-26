import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactService } from "../../contact.service";

@Component({
  selector: "app-contacts-edit",
  templateUrl: "./contacts-edit.component.html",
  styleUrls: ["./contacts-edit.component.css"]
})
export class ContactsEditComponent implements OnInit {
  private id: string;
  private isNew: boolean;

  private title: string;
  private firstName: string;
  private lastName: string;
  private number: string;

  private message: string;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.id == "new" ? (this.isNew = true) : (this.isNew = false);

      if (this.isNew) {
        this.title = "Add new contact";
      } else {
        this.getContact(this.id);
      }
    });
  }

  getContact(id): void {
    console.log(id);
    this.contactService.getContact(this.id).subscribe(contact => {
      this.firstName = contact[0].firstName;
      this.lastName = contact[0].lastName;
      this.number = contact[0].number;
      this.title = `Edit ${this.firstName} ${this.lastName}`;
    });
  }

  handleSubmit(): void {
    if (this.firstName === "" || this.lastName === "" || this.number === "")
      this.message = "Please fill all fields";
    else if (!this.number.match(/^[+][0-9][0-9][ ][0-9][0-9][ ][0-9]*/))
      this.message = "Please enter a valid phone number";
    else {
      const newContact = {
        firstName: this.firstName,
        lastName: this.lastName,
        number: this.number
      };
      if (this.isNew) {
        // If it's a new contact we have to POST
        this.contactService.addContact(newContact).subscribe(res => {
          if (res['msg'] === "OK") this.message = "Contact added!";
          else this.message = `Error : ${res['msg']}`;
        });
      } else {
        // If not we have to PUT
        this.contactService
          .updateContact(this.id, newContact)
          .subscribe(res => {
            this.message = "Contact updated!";
          });
      }
    }
  }
}
