let input = parseInt(document.getElementById("input").value);
let result = "";
let x = 27;

function mathematik(event) {
    input = parseInt(document.getElementById("input").value);
    event.preventDefault();
    if (input > x) {
        result = (input - x) * 2;
        console.log(result);
    } else {
        result = 27 - input;
        console.log(result);
    }


}

