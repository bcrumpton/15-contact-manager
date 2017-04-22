export function create(data) {
  data.id = new Date();

  return {
    type: 'CONTACT@CREATE',
    data,
  };
}

export function findAll() {
  return {
    type: 'CONTACT@FIND_ALL',
    data: JSON.parse(window.localStorage.contacts || '[]')
  };
}

export function remove(id) {
  return { type: 'CONTACT@REMOVE', id };
}
