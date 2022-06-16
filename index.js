let hands = ["rock", "paper", "scissor"];
const humanScore = document.querySelector(".human");
const computerScore = document.querySelector(".computer");
const choose = document.querySelector(".choose");


// Game rule

// Rock beats scissors, scissors beats paper, and paper beats rock.

//function for rock button

const show = document.querySelector(".show");

const add = () => {
  ++humanScore.textContent;

  let human = humanScore.textContent;
  localStorage.setItem("human", human);
};

const addTwo = () => {
  ++computerScore.textContent;

  let comp = computerScore.textContent;
  localStorage.setItem("comp", comp);
};

// if (localStorage.getItem("human") && localStorage.getItem("comp")) {
//   humanScore.textContent = localStorage.getItem("human");
//    computerScore.textContent = localStorage.getItem("comp");
// }
//store data in local storage
// localStorage.setItem("name","mina")
// localStorage.setItem("class","one");

// //get data from local storage
// localStorage.getItem("name")

// //updata data
// localStorage.setItem("name", "min");
// localStorage.class="two";

// //remove
// localStorage.clear()
// localStorage.removeItem("name");

const playRock = (item) => {
  let computer = randomItem();

  if (item === "rock") {
    if (computer === "rock") {
      console.log("there is a tie");
      choose.innerHTML = `<div calss="set">
                           <i class="fas fa-hand-fist icon one"></i>
                            <p>You played ${item}</p>
                          </div> 
                            <aside><p>It's a Draw 🙃</p></aside> 
                         <div class="tie"> 
                            <i class="fas fa-hand-fist icon one"></i>
                            <p>Bot played ${computer}</p>  
                         </div>  
                         <button class="again">play again</button>
            `;
    } else if (computer === "scissors") {
      console.log("player win");
      add();
      choose.innerHTML = `<div class="set">
                            <i class="fas fa-hand-fist icon one"></i>
                                
                            <p>You played ${item}</p>
                        </div>
                        <aside><p>You Win 🥳</p></aside>
                        <div class="tie">
                            <i class="fas fa-hand-scissors icon three"></i>
                            <p>Bot played ${computer}</p> 
                         </div>    
                         <button class="again">play again</button>
            `;
    } else if (computer === "paper") {
      console.log("computer win");
      addTwo();
      choose.innerHTML = `<div class="set">
                                <i class="fas fa-hand-fist icon one"></i>
                                    
                                <p>You played ${item}</p>
                         </div> 
                          <aside><p>You lose 😞</p></aside>
                        <div class="tie">
                            <i class="fas fa-hand icon  two"></i>
                            <p>Bot played ${computer}</p>
                        </div>     
                            <button class="again">play again</button>
            `;
    }
  }
};

//function for paper button
const playPaper = (item) => {
  let computer = randomItem();
  if (item === "paper") {
    if (computer === "rock") {
      console.log("player wins");
      add();
      choose.innerHTML = `
                            <div class="set">
                                    <i class="fas fa-hand icon paper"></i>  
                                    <p>You played ${item}</p>
                            </div> 
                            <aside><p>You Win 🥳</p></aside> 
                            <div class="tie">
                                    <i class="fas fa-hand-fist icon one"></i>
                                    <p>Bot played ${computer}</p> 
                                </div>    
                            <button class="again">Play again</button>
            `;
    } else if (computer === "scissors") {
      console.log("computer wins");
      addTwo();
      choose.innerHTML = `<div class="set">
                            <i class="fas fa-hand icon two"></i>
                            <p>You played ${item}</p>
                        </div>
                         <aside><p>You lose 😞 </p></aside>
                        <div class="tie">     
                             <i class="fas fa-hand-scissors icon three"></i>
                            <p>Bot played ${computer}</p>
                        </div>    
                             <button class="again">Play again</button>
            `;
    } else if (computer === "paper") {
      console.log("there is a tie");
      choose.innerHTML = `<div class="set">
      <i class="fas fa-hand icon two"></i>
       <p>You played ${item}</p>
       </div>
       <aside><p>It's a Draw 🙃</p></aside> 
       <div class="tie">    
      <i class="fas fa-hand icon two"></i>
        <p>Bot played ${computer}</p>    
        </div> 
         <button class="again">Play again</button>
            `;
    }
  }
};

//function for scissors btn
const playScissor = (item) => {
  let computer = randomItem();

  if (item === "scissor") {
    if (computer === "rock") {
      console.log("computer wins");

      addTwo();
      choose.innerHTML = `<div class="set">
                            <i class="fas fa-hand-scissors icon three"></i>
                            <p>You played ${item}</p>
                         </div> 
                         <aside><p>You lose 😞</p></aside> 
                         <div class="tie">  
                          <i class="fas fa-hand-fist icon one"></i>
                            <p>Bot played ${computer}</p>
                        </div>   
                         <button class="again">Play again</button>
            `;
    } else if (computer === "scissors") {
      console.log("there is a tie");
      choose.innerHTML = `<div class="set">
                            <i class="fas fa-hand-scissors icon three"></i>
                            <p>You played ${item}</p> 
                        </div> 
                        <aside><p>It's a Draw 🙃</p></aside>   
                        <div class="tie">  
                            <i class="fas fa-hand-scissors icon three"></i>
                            <p>Bot played ${computer}</p>
                        </div> 
                        <button class="again">Play again</button>
            `;
    } else if (computer === "paper") {
      console.log("player wins");
      //   humanScore.textContent = Number(humanScore.textContent) + 1;
      add();
      choose.innerHTML = `<div class="set">
                            <i class="fas fa-hand-scissors icon three"></i>
                            <p>You played ${item}</p>
                         </div> 
                         <aside><p>You Win 🥳</p></aside>  
                         <div class="tie">
                            <i class="fas fa-hand icon two"></i>
                            <p>Bot played ${computer}</p> 
                          </div>
                          <button class="again">Play again</button>
            `;
    }
  }
};

// Create a function that returns a random item from the array for computer player
const randomItem = () => {
  let num = Math.random() * 2;
  // console.log(num)

  let selectItem = num.toFixed(0);
  // console.log(selectItem)

  let pick = hands[selectItem];
  // console.log(pick)
  return pick;
};

//function to continue playing
const playAgain = () => {
  choose.innerHTML = `
  <i class="fas fa-hand-fist icon one"></i>
          <i class="fas fa-hand icon two"></i>
            <i class="fas fa-hand-scissors icon three"></i>
       `;
};

// callback function for rock button
function rock(params) {
  //   playGame(hands[0]);
  playRock(hands[0]);
}

// callback function for scissors button
function sicssors(params) {
  //   playGame(hands[2]);
  playScissor(hands[2]);
}

//callback function for paper
function paper(params) {
  //   playGame(hands[1]);
  playPaper(hands[1]);
}

//event delegation
choose.addEventListener("click", (e) => {
  let tar = e.target;
  console.log(tar);
  if (tar.className.includes("three")) {
    console.log("a");
    sicssors();
  } else if (tar.className.includes("one")) {
    console.log("b");
    rock();
  } else if (tar.className.includes("two")) {
    console.log("c");
    paper();
  } else if (tar.className.includes("again")) {
    console.log("d");
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

// rockBtn.addEventListener("click", rock);

// paperBtn.addEventListener("click", paper);

// scissorBtn.addEventListener("click", sicssors);

// function that direct the whole game broken into smaller functions playRock,PlayPaper,playScissors

// const playGame = (item) => {
//   let computer = randomItem();

//   if (item === "rock") {
//     if (computer === "rock") {
//       console.log("there is a tie");
//       choose.innerHTML = `<div calss="set">
//       <i class="fas fa-hand-fist icon"></i>
//          <p>you played ${item}</p> </div>  <div class="tie"> <i class="fas fa-hand-fist icon"></i>
//          <p>computer played ${computer}</p>  </div>   <button class="again">play again</button>
//             `;
//     } else if (computer === "scissors") {
//       console.log("player win");
//       add();
//       choose.innerHTML = `<div class="set">
//       <i class="fas fa-hand-fist icon "></i>

//        <p>you played ${item}</p></div> <div class="tie"><i class="fas fa-hand-scissors icon "></i>
//         <p>computer played ${computer}</p>  </div>    <button class="again">play again</button>
//             `;
//     } else if (computer === "paper") {
//       console.log("computer win");
//       addTwo();
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand-fist icon "></i>

//        <p>you played ${item}</p> </div> <div class="tie"><i class="fas fa-hand icon "></i>
//          <p>computer played ${computer}</p></div>     <button class="again">play again</button>
//             `;
//     }
//   } else if (item === "paper") {
//     if (computer === "rock") {
//       console.log("player wins");
//       add();
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand icon"></i>

//        <p>you played ${item}</p></div> <div class="tie">
//        <i class="fas fa-hand-fist icon "></i>
//          <p>computer played ${computer}</p> </div>    <button class="again">play again</button>
//             `;
//     } else if (computer === "scissors") {
//       console.log("computer wins");
//       addTwo();
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand icon "></i>
//        <p>you played ${item}</p></div> <div class="tie">
//       <i class="fas fa-hand-scissors icon"></i>
//          <p>computer played ${computer}</p></div>     <button class="again">play again</button>
//             `;
//     } else if (computer === "paper") {
//       console.log("there is a tie");
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand icon"></i>
//        <p>you played ${item}</p></div> <div class="tie">
//       <i class="fas fa-hand icon "></i>
//         <p>computer played ${computer}</p>    </div>  <button class="again">play again</button>
//             `;
//     }
//   } else if (item === "scissor") {
//     if (computer === "rock") {
//       console.log("computer wins");

//       addTwo();
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand-scissors icon"></i>
//        <p>you played ${item}</p></div>   <div class="tie">
//       <i class="fas fa-hand-fist icon "></i>
//           <p>computer played ${computer}</p> </div>   <button class="again">play again</button>
//             `;
//     } else if (computer === "scissors") {
//       console.log("there is a tie");
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand-scissors icon "></i>
//        <p>you played ${item}</p> </div>   <div class="tie">
//       <i class="fas fa-hand-scissors icon "></i>
//             <p>computer played ${computer}</p> </div> <button class="again">play again</button>
//             `;
//     } else if (computer === "paper") {
//       console.log("player wins");
//       //   humanScore.textContent = Number(humanScore.textContent) + 1;
//       add();
//       choose.innerHTML = `<div class="set"><i class="fas fa-hand-scissors icon "></i>
//       <p>you played ${item}</p></div><div class="tie">
//             <i class="fas fa-hand icon"></i>
//            <p>computer played ${computer}</p> </div>
//             <button class="again">play again</button>
//             `;
//     }
//   }
// };
