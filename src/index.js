import { style } from "./style.css";
import { Node } from "./node";

class KnightMap {
    constructor(start) {
        this.root = bulidTree(start);
    }

    // Build possible moves tree
    bulidTree(start) {

        const newRoot = new Node(start)

        return newRoot;
    }

    nextMoves(start) {
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
        if (x > 1 && y > 0) {moves.push((x - 2, y - 1));}
        if (x > 0 && y < 6) {moves.push([x - 1, y + 2]);}
        if (x > 0 && y > 1) {moves.push([x - 1, y - 2]);}

        return moves;

    }
}