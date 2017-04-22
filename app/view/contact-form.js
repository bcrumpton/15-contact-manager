import { create } from '../actions';

export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();

      this.store.dispatch(create({
        firstName: this.el.querySelector('.form--firstname').value,
        lastName: this.el.querySelector('.form--lastname').value,
        street: this.el.querySelector('.form--street').value,
        city: this.el.querySelector('.form--city').value,
        state: this.el.querySelector('.form--state').value
      }));

      this.el.querySelector('.form--firstname').value = '';
      this.el.querySelector('.form--lastname').value = '';
      this.el.querySelector('.form--street').value = '';
      this.el.querySelector('.form--city').value = '';
      this.el.querySelector('.form--state').value = '';
    });
  }
}
