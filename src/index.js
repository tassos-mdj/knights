import { style } from "./style.css";
import { KnightMap } from "./knightMap.js";

const test = new KnightMap([0,0]);  
console.log(test.nextMoves());
console.log(test.bulidTree());

