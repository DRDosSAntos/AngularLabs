import {Contact} from './models/contact';
import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  name: string;
  addContactForm: FormGroup;

  constructor() {
    this.name = 'Human!';
    this.addContactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required])
    });
  }

  contacts: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];
  newContact = {} as Contact;

  // tslint:disable-next-line:typedef
  addContact(){
    this.contacts.push(this.addContactForm.value);
    console.log('Submitted value:', this.addContactForm.value);
  }
}






