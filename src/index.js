import FirebaseService from "./firebase/FirebaseService.js"
// import BoPlayer from "./BO/BoPlayer";
// import BoMonster from "./BO/BoMonster";

console.log(FirebaseService);
let firebaseService = new FirebaseService();
console.log(firebaseService);
firebaseService.addUser({
    name: 'player1'
}).then(newUser=>{
    console.log('user inserted',newUser);
});
firebaseService.getUsers().then(users=>{
    console.log('users', users);
});

// let j1 = new BoPlayer("Kirito", "../../ressources/image/sao_launcher.png", 50, 5, 5);
// let m1 = new BoMonster("Asuna", "", 5, 5, 5);
// const result = j1.Fight(m1);
// console.log(result);
//
// var newlabel = document.createElement("label");
// newlabel.innerHTML = result + "</br>";
// document.getElementById("combat").appendChild(newlabel);