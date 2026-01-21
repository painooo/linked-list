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
        if (this.list.nextNode == null){
            this.prepend(value);
        } else {
            let next = this.#findTail();
            next.nextNode = new Node(value, {});
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
        let next = this.list.nextNode;
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
        this.list = new Node(this.list.nextNode, {});
        return this.list
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
console.log(list.pop())