import {linkedList} from './linkedList.js';
const list = new linkedList();

list.append(['dog','key']);
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.list)
