let vragen = ["welke is een schimmel kaas","op welke vraag zitten we","heb je deze vraag goed?","wat is system of a down","Wie gaat de kaas salami oorlog winnen"]
let antwoorden = [["cheddar","brie","salami","gouda"],["twee","honderd","drie","de uhh eerste ik weet het niet"],["nee dat heb ik niet","ja","ik heb hem fout","nee"],["een schimmel kaas","een salami","een soort slak","een band"],["kaas", "salami","niemand", "allebei"]]
let juist = ["brie","twee","ja","een band","kaas"]
let huidige_vraag = 0
let score = 0
const vraag = document.querySelector("#vraag")
const antwoord1 = document.querySelector("#antwoord1")
const antwoord2 = document.querySelector("#antwoord2")
const antwoord3 = document.querySelector("#antwoord3")
const antwoord4 = document.querySelector("#antwoord4")
const volgende = document.querySelector("#volgende")

console.log(vragen, antwoorden, juist, huidige_vraag, score)

function nieuwe_vraag() {
    vraag.textContent = vragen[huidige_vraag]
    antwoord1.textContent = antwoorden[huidige_vraag][0]
    antwoord2.textContent = antwoorden[huidige_vraag][1]
    antwoord3.textContent = antwoorden[huidige_vraag][2]
    antwoord4.textContent = antwoorden[huidige_vraag][3]
        huidige_vraag += 1
}

volgende.addEventListener("click", () => {
    nieuwe_vraag()
});

nieuwe_vraag()