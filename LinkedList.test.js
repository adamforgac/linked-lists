/* eslint-disable no-undef */
const LinkedList = require('./LinkedList');

describe('#prepend', () => {
  test('It adds the element to the beginning of the list', () => {
    const list = new LinkedList();
    list.prepend(10);
    const oldHead = list.head;
    list.prepend(20);

    expect(list.head.value).toBe(20);
    expect(list.head.next).toBe(oldHead);
    expect(list.length).toBe(2);
  });
});
