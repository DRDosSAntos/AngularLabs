import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../models/contact';
import {Observable, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'http://localhost:3000/contacts';
  #_contactsDataUpdated$ = new Subject<Contact[]>();

  constructor(private http: HttpClient) {
  }

  getContacts(): void {
    this.http.get<Contact[]>(this.url)
      .subscribe(contacts => {
      this.#_contactsDataUpdated$.next(contacts);
    });
  }

  addContact(contact: Contact): void{
    this.http.post<Contact>(this.url, contact)
      .subscribe(() => this.getContacts());
  }

  get contactsDataUpdated$(): Subject<Contact[]> {
    return this.#_contactsDataUpdated$;
  }
}
