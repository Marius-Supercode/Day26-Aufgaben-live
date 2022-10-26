function weather() {
    let input = parseInt(document.getElementById("input").value);
    console.log(input);
    if (input == 8 || input == 9 || input == 10) {
        output = "super";
        document.getElementById("output").innerHTML = "Wetter Qualität: " + output;
    } else if (input == 7 || input == 6) {
        output = "gut";
        document.getElementById("output").innerHTML = "Wetter Qualität: " + output;
    }
    else if (input == 3 || input == 5 || input == 4) {
        output = "okay";
        document.getElementById("output").innerHTML = "Wetter Qualität: " + output;
    } else {
        output = "schlecht";
        document.getElementById("output").innerHTML = "Wetter Qualität: " + output;
    }


}