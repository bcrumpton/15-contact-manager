import { remove } from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('grid-item');
    this.el.innerHTML = `
    <div class="contact-card">
      <h2 class="contact-card__name">Crumpton, Brannon</h2>
      <h4 class="contact-card__street">2702 Hartford Dr.</h4>
      <h4 class="contact-card__citystate">Nashville, TN</h4>
    </div>
    <div class="delete-button">
      <button class="button">Delete</button>
    </div>`;
  }


  mounted() {
    this.el.querySelector('.button').addEventListener('click', () => {
      alert('Hello');
      // this.store.dispatch(remove(this.contact.id));
    });
  }

  render() {
    this.el.querySelector('.contact-card__name').innerText = `${this.data.firstName}, ${this.data.lastName}`;
    this.el.querySelector('.contact-card__street').innerText = `${this.data.street}`;
    this.el.querySelector('.contact-card__citystate').innerText = `${this.data.city}, ${this.data.state}`;
  }
}

export default class ListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  render() {
    this.el.innerHTML = '';
    this.store.getState().contacts.forEach((contact) => {
      const item = new ItemView(contact, this.store);
      item.render();

      this.el.appendChild(item.el);
    });
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }
}
