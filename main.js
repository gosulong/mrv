const knopka = document.querySelector(".button");
const bodyColor = document.querySelector("body");

let togl = false;

console.log(knopka)
knopka.addEventListener("click" , () => Klik())

function Klik () {
    if (togl==true) {
        bodyColor.style.backgroundColor = "green";
        togl = false; 
    } else {
        bodyColor.style.backgroundColor = "red";
        togl = true;        
    }
    
    // alert("КОРЕЕЦ ДРОЗД")


}

