import {Contact} from './models/contact';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'world!';
  }

  contacts: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];
  newContact = {} as Contact;

  addContact(): void {
    this.contacts.push(this.newContact);
  }
}




