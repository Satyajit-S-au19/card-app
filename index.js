let aCards = [];

let mainTag = document.getElementById("h2-tag");
// let playEl=document.getElementById("play-btn")
// let newcardbtnEl=document.getElementById("newcard-el")
let allCards = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let sum = 0;

function satyaData() {
  randomNo();

  for (let i = 0; i < aCards.length; i++) {
    // console.log(aCards[i])

    sum += aCards[i];
    // console.log(sum)
    sumEl.textContent = "Sum: " + sum;
    allCards.textContent += aCards[i] + " ";
  }
}

function randomNo() {
  let noa = Math.floor(Math.random() * 12) + 1;
  let nob = Math.floor(Math.random() * 12) + 1;
  aCards.push(noa);
  aCards.push(nob);
}

let inputEl = document.getElementById("input-el");

let savenowEl = document.getElementById("saveNow-el");

let stockEl = document.getElementById("stock-el");

savenowEl.addEventListener("click", function () {
  stockEl.innerHTML += `<ul><li><a href="#" target="_blank">${inputEl.value} </a></li></ul>`;
});

// stockEl.innerHTML = `<ul>
// <li>
// <a href="#">${"inputEl.valuengngvnggb"} 
// </a>
// </li>
// </ul>`;

// console.log(stockEl)
