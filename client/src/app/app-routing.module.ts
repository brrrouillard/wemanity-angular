import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactsContainerComponent } from "./contacts/contacts-container/contacts-container.component";
import { ContactsEditComponent } from "./contacts/contacts-edit/contacts-edit.component";

const routes: Routes = [
  { path: "home", component: ContactsContainerComponent },
  { path: "edit/:id", component: ContactsEditComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
