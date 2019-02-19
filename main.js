//test
import BoPlayer from "./src/BO/BoPlayer.js";
import BoMonster from "./src/BO/BoMonster.js";

let j1 = new BoPlayer("academy", "", 50, 5, 5);
let m1 = new BoMonster("rasta", "", 5, 5, 5);
const result = j1.Fight(m1);
console.log(result);
var newlabel = document.createElement("label");
newlabel.innerHTML = result + "</br>";
document.getElementById("combat").appendChild(newlabel);