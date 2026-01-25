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
        if (this.list == null) return 0;
        let count = 0;
        let next = this.list;
        while (next.nextNode != null) {
            next = next.nextNode;
            count++;
        }
        return count;
    }
    head(){
        return this.list;
    }
    tail(){
        return this.#findTail();
    }
    at(index){
        if (this.size() == 0) return undefined;
        if (index == 0){
            return this.head();
        }
        if (index == this.size()-1){
            return this.tail();
        }
        let next = this.list;
        for (let i = index; i > 0; i-=2){
            if (i == 1) {
                next = next.nextNode;
            } else next = next.nextNode.nextNode;
        }
        return next;
    }
    pop(){
        if (this.list.value == null) return undefined;
        this.list = this.list.nextNode;
        return this.list
    }
    contains(value) {
        return this.findIndex(value) != -1;
    }
    findIndex(value){
        for (let i = 0; i < this.size(); i++) {
            if (value == this.at(i).value[0]) return i;
        }
        return -1;
    }
    toString(){
        let str = '';
        for (let i = 0; i < this.size(); i++) {
            str += `( ${this.at(i).value} ) -> `
        }
        str += 'null'
        return str;
    }
    removeAt(index){
        if (index == 0) {this.pop(); return 0}
        const toRemove = this.at(index);
        let next = this.list;
        while (next.nextNode.value != toRemove.value && next.nextNode != null) {
            next = next.nextNode;
        }
        next.nextNode = toRemove.nextNode;
    }
}
class Node {
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}
export {linkedList};