import {Contact} from './models/contact';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ContactService} from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  name: string;
  contacts: Contact[];

  // addContactForm: FormGroup;

  constructor(private contactService: ContactService) {
    this.name = 'Human!';
    // this.addContactForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required]),
    //   surname: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required])
    // });
  }

  ngOnInit(): void {
    this.contactService.contactsDataUpdated$
      .subscribe(c => {
        this.contacts = c;
      });

    this.contactService.getContacts();
  }
}



  // newContact = {} as Contact;

  // tslint:disable-next-line:typedef
  // addContact(){
  //   this.contacts.push(this.addContactForm.value);
  //   console.log('Submitted value:', this.addContactForm.value);
  // }
//   deleteContact(id: number) {
//
//   }
// }






