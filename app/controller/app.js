import ContactFormView from '../view/contact-form.js';
import ContactListView from '../view/contact-list.js';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.ContactForm = new ContactFormView(this.el.querySelector('.sidebar'), this.store);
    this.ContactList = new ContactListView(this.el.querySelector('.grid'), this.store);
  }

  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.ContactForm.mounted();
    this.ContactList.mounted();

    const dataString = window.localStorage.contacts || '[]';
    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
