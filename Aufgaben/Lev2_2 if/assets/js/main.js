let input = parseInt(document.getElementById("input").value);
let inputout = document.getElementById("inputout");
let concernout = document.getElementById("concernout");
let riskout = document.getElementById("riskout");
let body = document.querySelector("body");
let concern = "";
let risk = "";

function checkAurQuality(value) {
    if (value <= 50) {
        concern = "good";
        body.style.backgroundColor = "green";
        risk = "Little or no risk";
    } else if (value >= 50 && value <= 100) {
        concern = "Moderate";
        riks = "Acceptable quality";
        body.style.backgroundColor = "orange";
    } else if (value >= 100 && value <= 150) {
        concern = "Unhealthy for sensitive groups";
        riks = "Generable publics not likely affected";
        body.style.backgroundColor = "red";
    }
    concernout.innerHTML = concern;
    riskout.innerHTML = riks;
    inputout.innerHTML = value;

}