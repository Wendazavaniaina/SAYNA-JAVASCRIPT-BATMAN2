// Prenons contact
const btnFilm = document.getElementById("films");
const btnComics = document.getElementById("comics");
const btnTout = document.getElementById("tout");
const gradient =
  "linear-gradient(90deg, rgba(237, 222, 191, 0.7) 30%, rgba(137, 0, 8, 1) 100%)";

btnFilm.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnComics.style.background = "transparent";
  btnTout.style.background = "transparent";
});
btnComics.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnFilm.style.background = "transparent";
  btnTout.style.background = "transparent";
});
btnTout.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnFilm.style.background = "transparent";
  btnComics.style.background = "transparent";
});

const confirmbtn = document.getElementById("confirmbtn");
const btnClose = document.getElementById("btnClose");
const overlay = document.getElementById("overlay");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const invalid = document.getElementsByClassName("invalid");

confirmbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (mail.value == "" || message.value == "") {
    invalid[0].textContent = "ce champ est obligatoire";
    invalid[1].textContent = "ce champ est obligatoire";

  } else {
    ouvrirFenetre();
  }
});

function ouvrirFenetre() {
  overlay.style.display = "block";
}

btnClose.addEventListener("click", fermerFenetre);

function fermerFenetre() {
  overlay.style.display = "none";
}