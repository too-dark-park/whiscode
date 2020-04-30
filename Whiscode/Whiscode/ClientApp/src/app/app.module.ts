import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TopMenuComponent,
    ContactFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
