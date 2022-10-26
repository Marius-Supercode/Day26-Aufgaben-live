let body = document.getElementById("body");
const label = [document.querySelector("label")];

let redva = 0;
let greenva = 0;
let blueva = 0;
// onchange = "fontSizeChange(value)";

function redChange(value) {
    redva = value;
    body.style.backgroundColor = "rgb(" + redva + "," + greenva + "," + blueva + ")";
}
function greenChange(value) {
    greenva = value;
    body.style.backgroundColor = "rgb(" + redva + "," + greenva + "," + blueva + ")";
}
function blueChange(value) {
    blueva = value;
    body.style.backgroundColor = "rgb(" + redva + "," + greenva + "," + blueva + ")";
}
