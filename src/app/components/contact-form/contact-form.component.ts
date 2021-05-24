import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from '../../models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  addContactForm: FormGroup;

  constructor(private contactService: ContactService) {
    this.addContactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  addContact(){
    this.contactService.addContact(this.addContactForm.value);
    console.log('Submitted value:', this.addContactForm.value);
  }
}
