const flashcardsContainer = document.querySelector("#flashcards");
const flashcardsButton = document.querySelector("#flashcards-btn");

const flashcards = [
  {
    front: "el gato",
    back: "кот"
  },
  {
    front: "la mesa",
    back: "стол"
  },
  {
    front: "la casa",
    back: "дом"
  },
  {
    front: "el estudiante",
    back: "студент"
  }
];


// индекс текущей карточки
let indexCard = 0;

renderCard();

flashcardsContainer.onclick = flipCard;
flashcardsButton.onclick = nextCard;

// functions

function renderCard() {
    if (indexCard === flashcards.length) {
        indexCard = 0;
    }
    const cardTemplate = `
      <div class="flashcards__front">%front%</div>
      <div class="flashcards__back">%back%</div>
      <div class="flashcards__cover"></div>
    `;
    const flashcardsHTML = cardTemplate.replace("%front%", flashcards[indexCard].front).replace("%back%", flashcards[indexCard].back);
    flashcardsContainer.innerHTML = flashcardsHTML;
}

function flipCard() {
	  this.classList.toggle("flipped");
}

function nextCard() {
  if (flashcardsContainer.classList.contains("flipped")) {
    flashcardsContainer.classList.remove("flipped");
  }
  setTimeout(function () {
    const cover = flashcardsContainer.querySelector(".flashcards__cover");
    cover.classList.add("active");
    setTimeout(function () {
        indexCard++;
        renderCard();
        cover.classList.remove("active");
    }, 400);
  }, 200);
}