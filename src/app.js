/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["♦", "♥", "♠", "♣"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCard() {
  const value = getRandomElement(values);
  const suit = getRandomElement(suits);

  document.querySelector(".card-value").textContent = value;
  document.querySelector(".card-value").style.color =
    suit === "♥" || suit === "♦" ? "red" : "black";

  document.querySelectorAll(".card-suit").forEach(element => {
    element.textContent = suit;
    element.style.color = suit === "♥" || suit === "♦" ? "red" : "black";
  });
}

window.onload = generateRandomCard;

document
  .getElementById("generate-card")
  .addEventListener("click", generateRandomCard);

setInterval(generateRandomCard, 10000);
