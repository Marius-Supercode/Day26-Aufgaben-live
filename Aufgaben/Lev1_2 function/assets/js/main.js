function bgc(event) {
    event.preventDefault();
    let body = document.querySelector("body");
    let colorLet = document.getElementById("input").value;
    console.log(colorLet);
    body.style.backgroundColor = colorLet;
}
