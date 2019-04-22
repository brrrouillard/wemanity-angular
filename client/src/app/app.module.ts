import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsContainerComponent } from './contacts/contacts-container/contacts-container.component';
import { ContactsEditComponent } from './contacts/contacts-edit/contacts-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsContainerComponent,
    ContactsEditComponent
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
