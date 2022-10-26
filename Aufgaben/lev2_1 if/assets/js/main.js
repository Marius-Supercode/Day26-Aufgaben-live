let winner = document.getElementById("winner");
let meikePoint = document.getElementById("meikepoint");
let johnPoint = document.getElementById("johnpoint");

let johnAlter = 22;
let johnGrosse = 170;

let meikeAlter = 34;
let meikeGrosse = 168;


let johnPunkte = 22 * 5 + 170;
let meikePunkte = 34 * 5 + 168;

let result = "";

johnPoint.innerHTML = "John hat: " + johnPunkte + " Punkte!";
meikePoint.innerHTML = "Meike hat: " + meikePunkte + " Punkte!";
if (johnPunkte === meikePunkte) {
    result = "Unentschieden";
    winner.innerHTML = result;
} else if (johnPunkte > meikePunkte) {
    result = "John gewinnt";
    winner.innerHTML = result;
} else if (johnPunkte < meikePunkte) {
    result = "Meike gewinnt";
    winner.innerHTML = result;
}