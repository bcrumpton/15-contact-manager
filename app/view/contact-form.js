export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const data = {
        firstName: this.el.querySelector('.form--firstname').value,
        lastName: this.el.querySelector('.form--lastname').value,
        street: this.el.querySelector('.form--street').value,
        city: this.el.querySelector('.form--city').value,
        state: this.el.querySelector('.form--state').value
      };

      this.store.dispatch({ type: 'CONTACT@CREATE', data });
    });
  }
}
