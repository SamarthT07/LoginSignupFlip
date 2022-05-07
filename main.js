const card = document.querySelector(".card__inner");
const cardx = document.querySelector(".back");
const cards = document.getElementById("ass");

cards.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

cardx.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});