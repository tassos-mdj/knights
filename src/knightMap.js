import { Node } from "./node";

export class KnightMap {
    constructor(start, finish) {
        // this.root = bulidTree(start);
        this.start = start;
        this.finish = finish;
    }

    // Build possible moves tree
    bulidTree(start = this.start, finish = this.finish) {
        if (start === finish) {return;}

        const nextMovesList = this.nextMoves(start);
        const nextMovesListLength = nextMovesList.length;
        const newRoot = new Node(start);
        for (let i = 0; i < nextMovesListLength; i++) {
            newRoot.next[i] = new Node(nextMovesList[i]);
            this.bulidTree(next[i].data, finish);
        }

        return newRoot;
    }

    nextMoves(start = this.start) {
        const moves = [];
        let x = start[0];
        let y = start[1];

        // Ascending first
        if (x < 6 && y < 7) {moves.push([x + 2, y + 1]);}
        if (x < 6 && y > 0) {moves.push([x + 2, y - 1]);}
        if (x < 7 && y < 6) {moves.push([x + 1, y + 2]);}
        if (x < 7 && y > 1) {moves.push([x + 1, y - 2]);}

        //Descending first
        if (x > 1 && y < 7) {moves.push([x - 2, y + 1]);}
        if (x > 1 && y > 0) {moves.push([x - 2, y - 1]);}
        if (x > 0 && y < 6) {moves.push([x - 1, y + 2]);}
        if (x > 0 && y > 1) {moves.push([x - 1, y - 2]);}

        return moves;

    }
}