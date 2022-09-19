let hands = ["rock", "paper", "scissor"];
const humanScore = document.querySelector(".human");
const computerScore = document.querySelector(".computer");
const choose = document.querySelector(".choose");

// Game rule

// Rock beats scissors, scissors beats paper, and paper beats rock.


// const show = document.querySelector(".show");

const add = (score) => {
  if (score.className === "human") {
    ++score.textContent;
    let human = score.textContent;
    localStorage.setItem("human", human);
  } else if (score.className === "computer") {
    ++score.textContent;
    let comp = computerScore.textContent;
    localStorage.setItem("comp", comp);
  }
};

const result = (rockIcon, item, resulttext, rockIconO, computer) => {
  choose.innerHTML = `<div class="set">
                           <i class="${rockIcon}"></i>
                            <p>You played ${item}</p>
                          </div> 
                            <aside><p>${resulttext}</p></aside> 
                         <div class="tie"> 
                            <i class="${rockIconO}"></i>
                            <p>Bot played ${computer}</p>  
                         </div>  
                         <button class="again">play again</button>
            `;
};
const data = {
  rockIcon: "fas fa-hand-fist icon one",
  paperIcon: "fas fa-hand icon two",
  sicssorIcon: "fas fa-hand-scissors icon three",
  rockIconO: "fas fa-hand-fist icon one",
  paperIconO: "fas fa-hand icon two",
  sicssorIconO: "fas fa-hand-scissors icon three",
  win: "You Win 🥳",
  draw: "It's a Draw 🙃",
  lose: "You lose 😞",
};

//function for rock button
const playRock = (item) => {
  let computer = randomItem();

  if (item === computer) {
    console.log("there is a tie");

    result(data.rockIcon, item, data.draw, data.rockIconO, computer);
  } else if (item === "rock" && computer === "scissors") {
    console.log("player win");
    add(humanScore);

    result(data.rockIcon, item, win, data.sicssorIcon, computer);
  } else if (item === "rock" && computer === "paper") {
    console.log("computer win");

    add(computerScore);

    result(data.rockIcon, item, data.lose, data.paperIcon, computer);
  }
  // }
};

//function for paper button
const playPaper = (item) => {
  let computer = randomItem();
  if (item === "paper") {
    if (computer === "rock") {
      console.log("player wins");
      add(humanScore);

      result(data.paperIcon, item, data.win, data.rockIcon, computer);
    } else if (computer === "scissors") {
      console.log("computer wins");
      add(computerScore);

      result(paperIcon, item, lose, sicssorIcon, computer);
    } else if (computer === "paper") {
      console.log("there is a tie");

      result(data.paperIcon, item, data.draw, data.paperIconO, computer);
    }
  }
};

//function for scissors btn
const playScissor = (item) => {
  let computer = randomItem();

  if (item === "scissor") {
    if (computer === "rock") {
      add(computerScore);
      result(data.sicssorIcon, item, data.lose, data.rockIcon, computer);
    } else if (computer === "scissors") {
      result(data.sicssorIcon, item, draw, data.sicssorIconO, computer);
    } else if (computer === "paper") {
      add(humanScore);
      result(data.sicssorIcon, item, data.win, data.paperIcon, computer);
    }
  }
};

// Create a function that returns a random item from the array for computer player
const randomItem = () => {
  let num = Math.floor(Math.random() * 3);
  return hands[num];
};

//function to continue playing
const playAgain = () => {
  choose.innerHTML = `
  <i class="fas fa-hand-fist icon one"></i>
          <i class="fas fa-hand icon two"></i>
            <i class="fas fa-hand-scissors icon three"></i>
       `;
};

//event delegation
choose.addEventListener("click", (e) => {
  let tar = e.target;
  console.log(tar);
  if (tar.className.includes("three")) {
    playScissor(hands[2]);
  } else if (tar.className.includes("one")) {
    playRock(hands[0]);
  } else if (tar.className.includes("two")) {
    playPaper(hands[1]);
  } else if (tar.className.includes("again")) {
    playAgain();
  }
});

if (localStorage.getItem("human") && localStorage.getItem("comp")) {
  humanScore.textContent = localStorage.getItem("human");
  computerScore.textContent = localStorage.getItem("comp");
}

const cls = () => {
  localStorage.human = 0;
  localStorage.comp = 0;
  humanScore.textContent = localStorage.getItem("human");
  computerScore.textContent = localStorage.getItem("comp");
};

const cle = document.querySelector(".clear");
cle.addEventListener("click", cls);
