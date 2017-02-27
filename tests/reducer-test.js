import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('create a single contact', (assert) => {
    const oldState = { contacts: [] };
    const action = { type: 'CONTACT@CREATE', data: [{ first: 'Brannon', last: 'Crumpton' }] };
    assert.equal(reducer(oldState, action), { first: 'Brannon', last: 'Crumpton' }, 'a contact was created');
  });
});
