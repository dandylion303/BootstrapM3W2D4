///////ESERCIZIO 1= COLLASSARE LE SEZIONI///////

const toggleButton = document.querySelector(".btnToggleWD")
const section = document.querySelector(".sectionWD")

const toggleButton2 = document.querySelector(".btnToggleWS")
const section2 = document.querySelector(".sectionWS")

const toggleButton3 = document.querySelector(".btnToggleDD")
const section3 = document.querySelector(".sectionDD")


function hideSectionWD() {
    section.classList.toggle("hide")
}

function hideSectionWS() {
    section2.classList.toggle("hide")
}

function hideSectionDD() {
    section3.classList.toggle("hide")
}

toggleButton.addEventListener("click", hideSectionWD)
toggleButton2.addEventListener("click", hideSectionWS)
toggleButton3.addEventListener("click", hideSectionDD)


////////ESERCIZIO 2: CONTO DESTINAZIONI////////////

function countDestinations() {
    const counterElement = document.querySelector(".counter")
    const destinations = document.querySelectorAll("#weeklyDeal .destination")
    const destinationsNumbers = destinations.length
    counterElement.innerText = `Ci sono ${destinationsNumbers} mete disponibili questa settimana!`;
}

window.onload = countDestinations


////////ESERCIZIO 5: ELIMINO CARD////////////
const buttonDelete = document.querySelector(".btnDelete")

function deleteCards() {
    const cards = document.querySelectorAll(".card")
    for (let card of cards) {
        card.remove()
    }
}

buttonDelete.addEventListener("click", deleteCards)


////////EXTRA-EXTRA = NAVBAR BACKGROUND ON SCROLL//////

function navbarBg() {
    const navbar = document.querySelector("#navbar")
    if (window.scrollY > 100) {

        navbar.setAttribute("style", "background-color:white!important")
    }
    else {
        navbar.setAttribute("style", "background-color:transparent")
    }
}
window.onscroll = navbarBg


/////////EXTRA-EXTRA-EXTRA = HAMBURGER BACKGROUND ON CLICK//////
const hamburger = document.querySelector("#hamburger")
function whiteHamburger(){
    navbar.setAttribute("style", "background-color:white!important")
}

hamburger.addEventListener("click",whiteHamburger)



