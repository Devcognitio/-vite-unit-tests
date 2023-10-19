import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {
  contacts: any[] = [];
  contactForm: FormGroup;
  messageResponse = '';

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const newContact = this.contactForm.value;
      if (
        !this.contacts.some((contact) => contact.email === newContact.email)
      ) {
        this.contacts.push(newContact);
        this.contactForm.reset();
      }
    }
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  saveContacts() {
    this.contactService.saveContacts(this.contacts).subscribe({
      next: () => {
        this.messageResponse = 'Contactos guardado exitosamente';
      },
      error: () => {
        this.messageResponse = 'Ups Intentalo de nuevo';
      },
    });
  }
}
