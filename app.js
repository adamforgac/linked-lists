/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.append(20); 
list.append(30); 
list.prepend(10); 
list.prepend(5); 
list.append(45); 
console.log(list.find(45));
console.log(list.size());
console.log(list.toArray());
console.log(list.toString());
list.insertAt(3, 55);
console.log(list.toString());
