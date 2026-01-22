class linkedList {
    constructor(){
        this.list = {};
    }
    #findTail(){
        let next = this.list;
        while (next.nextNode.nextNode != null) {
            next = next.nextNode;
        }
        return next
    }
    append(value){
        if (Object.values(this.list).length == 0){
            this.prepend(value);
        } else {
            let tail = this.#findTail();
            tail.nextNode = new Node(value, {});
        }
    }
    prepend(value) {
        this.list = new Node(value, this.list);
    }
    size(){
        let count = 0;
        let next = this.list;
        while (next.nextNode != null) {
            next = next.nextNode;
            count++;
        }
        return count;
    }
    head(){
        return this.list.value;
    }
    tail(){
        return this.#findTail().value;
    }
    at(index){
        if (index == 0){
            return this.head();
        }
        if (index == this.size()-1){
            return this.tail();
        }
        let next = this.list.nextNode; // So first one isn't iterated
        if(next == null) return undefined;
        let count = 1;
        while (next.nextNode != null) {
            if (count == index) return next.value;
            count++;
            next = next.nextNode;
        }
        return next.value
    }
    pop(){
        if (this.list.value == null) return undefined;
        this.list = this.list.nextNode;
        return this.list
    }
    contains(value) {
        for (let i = 0; i < this.size(); i++) {
            if (value == this.at(i)) return true
        }
        return false;
    }
    findIndex(value){
        for (let i = 0; i < this.size(); i++) {
            if (value == this.at(i)) return i;
        }
        return -1;
    }
    toString(){
        let str = '';
        for (let i = 0; i < this.size(); i++) {
            str += `( ${this.at(i)} ) -> `
        }
        str += 'null'
        return str;
    }
}
class Node {
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}
const list = new linkedList();
list.append('abc');
list.append('abc2');
list.append('abc3');
console.log(list.list)
console.log(list.size())
console.log(list.tail())
console.log(list.at(2)) // abc3
console.log(list.contains('abc2')) // true
console.log(list.findIndex('abc3')); // 1
console.log(list.toString());