import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact.class';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

}
