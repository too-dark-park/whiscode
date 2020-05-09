import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { ContactForm } from './contact-form';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  providers: [ContactFormService],
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactFormService: ContactFormService, public messageService: MessageService) {
    this.contactForm = this.formBuilder.group({
      name: this.nameFormControl,
      emailAddress: this.emailFormControl,
      message: this.messageFormControl
    });
  }

  sendContactForm(form: ContactForm): void {
    this.contactFormService
      .sendContactForm(form)
      .subscribe(
        response => { }, // HTTP response
        error => { }, // HTTP Error
        () => {
          if (!this.messageService.messages.length) { // Yuck - integrate better error handling
            this.messageService.add("Success", "Thanks for getting in touch! I aim to respond to all queries within 48 hours.");
          }

          this.contactForm.reset();
        } // Request complete
    );
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit(): void {
  }

  onSubmit(contactFormData: ContactForm) {
    this.sendContactForm(contactFormData);
  }
}
