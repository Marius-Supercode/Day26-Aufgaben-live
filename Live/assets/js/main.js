// const firstName = "Mariue";
// let lastName = "Elting";
// lastName = "Kollmann";

// let y = 3;
// let x = 2;

// // !Increment

// // alles rechnet +1
// x++;
// x = x + 1;
// x += 1;
// x = ++x;

// // !Decrement

// // alles rechnet -1
// x--;
// x = x - 1;
// x -= 1;
// x = --x;



// // !Verleiche

// x = 5;
// y = 3;

// // Ist Gleich
// console.log(x == y);
// // prüft zusätzlich den typen
// console.log(x === y);

// // Ist ungleich
// console.log(x != y);
// // prüft zusätzlich den typen
// console.log(x !== y);

// // Vergleich mit string
// console.log("super" === "code");

// // Kleiner als
// console.log(y < x);
// // Größer als 
// console.log(y > x);

// // Größer Gleich
// console.log(y >= x);
// // Kleiner Gleich
// console.log(y <= x);



// // !Elemente aus dem HTML bearbeiten

// // speichert die h1 aus dem HTML in einer Variable
// const headline = document.getElementById("headlineId");

// // ändert den Text der H1
// headline.innerHTML = "Hello";

// // ändert den Style der h1
// headline.style.color = "Red";
// headline.style.backgroundColor = "grey";

// // fügt der h1 eine Klasse hinzu
// headline.classList.add("bold");



// //! Function

// // definiert eine function
// function hello() {
//     console.log("Hello Everyone");
// }
// // "triggert" die function (function wird ausgeführt)
// hello();

// //! Function mit Parametern

// // definiert eine function mit parameter
// function helloPerson(firstName) {
//     console.log("Hallo " + firstName);
// }
// // setzt den/die begriff/e in den Klammern für den definierten Parameter ein
// // und führt die function aus
// helloPerson("Marius");


// //! text aus Inputfeldern ausgeben

// // nimmt den eingegebenen text aus dem Inputfeld und gibt diesen in der Console aus
// function helloClick(event) {
//     event.preventDefault;
//     const name = document.getElementById("name").value;
//     console.log(name);
// }



// !!!!!NEU NEU NEU


//! If statements

const firstName1 = "Marius";

// Hier wird geprüft ob firstName1 Marius ist
if (firstName1 === "Marius") {
    // Wenn die Aussage wahr ist wird die Funktion ausgeführt
    console.log("Hello Marius");
}

const age = 18;

// prüft ob "age" kleiner als 18 ist
if (age < 18) {
    // gibt die Aussage nur aus wenn "age" unter 18 ist
    console.log("You can't enter!");
}
// gibt an was passieren soll wenn "age" nicht unter 18 ist 
// (das else kommt hintder die schließende Klammer vom IF)
else {
    // gibt die Aussage nur aus wenn "age" über 18 ist
    console.log("Loggin you in....");
}

// wenn true direkt in den Klammern einegegen wird, wird die Aussage immer ausgegeben
if (true) {
    console.log("wahr");
}

//! else if


// prüft ob "age" kleiner als 18 ist
if (age < 18) {
    // gibt die Aussage nur aus wenn "age" unter 18 ist
    console.log("You can't enter!");
    // prüft zusätzlich ob das Alter über 0 ist 
    // man kann beliebig viele else if einsetzen
} else if (age < 0) {
    console.log("invalid age");
}
// gibt an was passieren soll wenn "age" nicht unter 18 ist 
// (das else kommt hintder die schließende Klammer vom IF/else IF)
else {
    // gibt die Aussage nur aus wenn "age" über 18 ist
    console.log("Loggin you in....");
}

//! mehrere abfragen in einer zeile

// mit einem && lässt sich eine zusätzliche Bedingung definieren, dann müssen beide Bedingungen zutreffen

// prüft zusätzlich ob das alter über 0 ist
// nur wenn beides zutrifft wird die Aussage ausgegeben
if (age < 18 && age > 0) {
    // gibt die Aussage nur aus wenn "age" unter 18 ist
    console.log("You can't enter!");
}
// gibt an was passieren soll wenn "age" nicht unter 18 ist 
// (das else if kommt hintder die schließende Klammer vom IF)
else if (age >= 18) {
    // gibt die Aussage nur aus wenn "age" über 18 ist
    console.log("Loggin you in....");
} else {
    // wenn keine der oberen Aussagen zutrifft wird diese Aussage ausgegeben
    console.log("Ungültiges Alter");
}


//! Praxis Beispiel 

// hier wird geprüft ob das eingegebene Alter aus dem Inputfeld über 18 ist
function adult() {
    // unter.value bekommt man standardmäßig einen string zurück
    // daher funktioniert folgendes nicht :const age1 = document.getElementById("age1").value;

    // aus diesem Grund wird ParseInt verwendet, das wandelt den string in eine Zahl um
    const age1 = parseInt(document.getElementById("age1").value);
    console.log(age1);

    // definiert die Variable "output"
    let output = "";

    if (age1 >= 18) {
        output = "Volljährig";
    } else {
        output = "Minderjährig";
    }
    // setzt den Output für das HTML element mit der ID "output" im HTML ein
    document.getElementById("output").innerHTML = output;
}







