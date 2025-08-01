export class Node {
    constructor(data, ...args) {
        this.data = data;
        this.children = args;
    }
}