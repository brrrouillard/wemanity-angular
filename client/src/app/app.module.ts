import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsEditComponent } from './contacts/contacts-edit/contacts-edit.component';
import { ContactEntryComponent } from './contacts/contacts-list/contact-entry/contact-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsEditComponent,
    ContactEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
