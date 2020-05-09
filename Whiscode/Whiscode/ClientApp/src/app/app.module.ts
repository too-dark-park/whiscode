import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { SectionsComponent } from './sections/sections.component';
import { MaterialModule } from './material-module';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TopMenuComponent,
    ContactFormComponent,
    HomeComponent,
    SectionsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    })
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
