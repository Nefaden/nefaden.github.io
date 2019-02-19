//test
import BoPlayer from "./src/BO/BoPlayer.js";
import BoMonster from "./src/BO/BoMonster.js";

let j1 = new BoPlayer("georges", "", 2, 10, 10);
let m1 = new BoMonster("chevre", "", 50, 5, 5);
const result = j1.Fight(m1);
console.log(result);