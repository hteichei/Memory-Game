const catsData = [
  {
    name: "fluffy",
    img:
      "https://images.unsplash.com/photo-1508292549404-81fd946f8c2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17cef5b2f74f9bc91a12d06301112152&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "harry",
    img:
      "https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f51bab3843846797026c5f5ef601f786&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "jimmy",
    img:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d7b1bd980752bb3ea0a259f528eae78&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "rosy",
    img:
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb029e07f8e81d2f7332382b88f2746c&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "smucky",
    img:
      "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4decef406ad8e498b31a1e2699cd10fa&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "greenBean",
    img:
      "https://images.unsplash.com/photo-1471874276752-65e2d717604a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d89f633e450817a42ddfaa45de0c0748&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "teddy",
    img:
      "https://images.unsplash.com/photo-1516470544373-df3edeb89d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=472a04b84e8812d5210c276104287058&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "benson",
    img:
      "https://images.unsplash.com/photo-1463008420065-8274332e2be8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e604c4145ad16878f99be2fb31ff25c&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "fluffy",
    img:
      "https://images.unsplash.com/photo-1508292549404-81fd946f8c2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17cef5b2f74f9bc91a12d06301112152&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "harry",
    img:
      "https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f51bab3843846797026c5f5ef601f786&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "jimmy",
    img:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d7b1bd980752bb3ea0a259f528eae78&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "rosy",
    img:
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb029e07f8e81d2f7332382b88f2746c&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "smucky",
    img:
      "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4decef406ad8e498b31a1e2699cd10fa&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "greenBean",
    img:
      "https://images.unsplash.com/photo-1471874276752-65e2d717604a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d89f633e450817a42ddfaa45de0c0748&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "teddy",
    img:
      "https://images.unsplash.com/photo-1516470544373-df3edeb89d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=472a04b84e8812d5210c276104287058&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "benson",
    img:
      "https://images.unsplash.com/photo-1463008420065-8274332e2be8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e604c4145ad16878f99be2fb31ff25c&auto=format&fit=crop&w=800&q=60"
  }
];

//randomize the cards using sort property
catsData.sort(function(a, b) {
  return 0.5 - Math.random();
});

//Use New Game button to refresh page and rerandomize tiles
const resetBtn = document.getElementById("newGame");
resetBtn.addEventListener("click", function() {
  refreshPage();
});

function refreshPage() {
  window.location.reload();
}

const lowScoreText = document.getElementById("lowScore");

function setLowScore() {
  let lowScore = localStorage.getItem("cats_LowScore");

  if (lowScore !== null) {
    lowScoreText.textContent = lowScore;
  } else {
    localStorage.setItem("cats_LowScore", 0);
  }
}

setLowScore();

const game = document.getElementById("game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");

game.appendChild(grid);
let catsGrid = [];

const body = document.querySelector("body");
const scoreBoard = document.getElementById("scoreBoard");

function addCats(arr) {
  arr.forEach(function(val) {
    const card = document.createElement("div");
    card.classList.add("cardBack");
    card.classList.add("card");
    card.dataset.name = val.name;
    card.style.backgroundImage = `url(${val.img})`;
    catsGrid.push(card);
    grid.appendChild(card);
  });
}

addCats(catsData);

let count = 0;
let guess1 = null;
let guess2 = null;
let target1 = null;
let totalClicks = 0;
let matchedCount = 0;

const clickCount = document.getElementById("clickCount");

let selected = [];

function handleCatClick() {
  let currentSelection = event.target;

  if (currentSelection.classList.contains("currentSelection")) {
    return;
  }

  if (selected.length === 2) {
    return;
  }

  currentSelection.classList.add("currentSelection");
  currentSelection.classList.remove("cardBack");

  if (count < 2) {
    count++;
    totalClicks++;

    if (count === 1) {
      guess1 = currentSelection;
      selected.push(guess1);
    } else {
      guess2 = currentSelection;
      selected.push(guess2);
    }

    //check to see if guesses match
    if (guess1 !== null && guess2 !== null) {
      if (guess1.dataset.name === guess2.dataset.name) {
        matchedCount += 2;
        guess1.classList.add("matched");
        guess2.classList.add("matched");
        setTimeout(resetGuessMatch, 500);
      } else {
        //reset guesses if no match
        setTimeout(resetGuessWrong, 1000);
      }
      if (matchedCount === catsData.length) {
        winner();
      }
    }
  }
  //update total clicks variable on webpage
  clickCount.innerHTML = totalClicks;
}

catsGrid.forEach(function(catElement) {
  catElement.addEventListener("click", handleCatClick);
});

function winner() {
  body.style.backgroundColor = "red";
  grid.textContent = "You Won!";
  grid.classList.add("winner");

  if (
    totalClicks < localStorage.getItem("cats_LowScore") ||
    Number(localStorage.getItem("cats_LowScore")) === 0
  ) {
    localStorage.setItem("cats_LowScore", totalClicks);
  }
  setLowScore();
}

function resetGuessWrong() {
  guess1 = null;
  guess2 = null;
  count = 0;
  selected.length = 0;

  let removeSelected = document.querySelectorAll(".currentSelection");
  removeSelected.forEach(function(val) {
    val.classList.remove("currentSelection");
    val.classList.add("cardBack");
  });
}

function resetGuessMatch() {
  guess1 = null;
  guess2 = null;
  count = 0;
  selected.length = 0;

  let removeSelected = document.querySelectorAll(".currentSelection");
  removeSelected.forEach(function(val) {
    val.classList.remove("currentSelection");
  });
}

function disable(catsGrid) {
  catsGrid.forEach(function(card) {
    card.classList.add("disabled");
  });
}
