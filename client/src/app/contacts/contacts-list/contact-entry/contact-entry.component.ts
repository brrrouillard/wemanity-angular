import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-entry',
  templateUrl: './contact-entry.component.html',
  styleUrls: ['./contact-entry.component.css']
})
export class ContactEntryComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() number: string;
  @Input() _id: string;

  constructor() { }

  ngOnInit() {
  }

}
