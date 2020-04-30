import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from '../app/contact-form/contact-form.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
