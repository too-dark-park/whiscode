import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: this.nameFormControl,
      email: this.emailFormControl,
      message: this.messageFormControl
    });
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

  onSubmit(customerData) {
    this.contactForm.reset();

    console.log(this.contactForm.valid)

    console.warn('Your order has been submitted', customerData);
  }
}
