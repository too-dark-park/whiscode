import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ContactForm } from './contact-form';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ContactFormService {
  sendContactFormUrl = 'api/contact/send';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ContactFormService');
  }

  sendContactForm(contactForm: ContactForm): Observable<ContactForm> {
    return this.http.post<ContactForm>(this.sendContactFormUrl, contactForm, httpOptions)
      .pipe(
        catchError(this.handleError("sendContactForm", contactForm))
      );
  }
}
