import {linkedList} from './linkedList.js';
const list = new linkedList();

list.append(['dog','key']);
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.removeAt(0);
list.removeAt(2);
console.log(list.list)
