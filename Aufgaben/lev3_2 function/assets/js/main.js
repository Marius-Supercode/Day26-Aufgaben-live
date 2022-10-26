// let fontSize = document.getElementById("fontsize")

let output = document.getElementById("output");
let fontout = document.getElementById("sizeval");


// onchange = "fontSizeChange(value)";

function fontSizeChange(value) {
    output.style.fontSize = value + "px";
    console.log(value);
    fontout.innerHTML = value + "px";
}
function fontFamChange(value) {
    output.style.fontFamily = value;
    console.log(value);
}

function textChange(value) {
    // output.style.fontFamily = value;
    output.innerHTML = value;
}


