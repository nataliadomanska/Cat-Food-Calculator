"use strict";

// Prevent refreshing of page after submitting
const form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// Declaration of variables
let nameCat;
let age;
let weight;
let isSterilised;
let activity;
let isOverWeight;
let nameCatFood;
let caloriesOfFood;

// Function that calculates the factor of fisiological status
const calcFactorOfFisiologStatus = function () {
  if (
    age === "adult" &&
    isSterilised === "intact" &&
    activity === "active" &&
    isOverWeight === "no"
  ) {
    return 1.4;
  } else if (
    age === "senior" &&
    isSterilised === "intact" &&
    activity === "active" &&
    isOverWeight === "no"
  ) {
    return 1.2;
  } else if (
    (age === "adult" || age === "senior") &&
    isSterilised === "spayed" &&
    activity === "active" &&
    isOverWeight === "no"
  ) {
    return 1.2;
  } else if (
    (age === "adult" || age === "senior") &&
    (activity === "sedentary" || isOverWeight === "yes")
  ) {
    return 1;
  } else if (age === "youngerKitten") {
    return 2.5;
  } else if (age === "olderKitten") {
    return 2;
  }
};

// CLICK SUBMIT BUTTON

document.querySelector(".submit").addEventListener("click", function () {
  // Values of variables from the form
  nameCat = document.querySelector(".nameCat").value
    ? document.querySelector(".nameCat").value
    : "Your cat";

  age = document.querySelector(".age").value;

  weight = Number(document.getElementById("weight").value);

  isSterilised = document.querySelector(".isSterilised").value;

  activity = document.querySelector(".lifestyle").value;

  isOverWeight = document.querySelector(".overweight").value;

  nameCatFood = document.querySelector(".nameFood").value
    ? document.querySelector(".nameFood").value
    : "food";

  caloriesOfFood = Number(document.querySelector(".calories").value);

  // Resting energy reuirments declaration
  const rer = weight * 30 + 70;

  // Fisiolgical factor's function calling

  const f = calcFactorOfFisiologStatus();
  console.log(f);

  // Function that calculates grams of food

  const calcGramsOfFood = function () {
    return Math.round(((f * rer) / caloriesOfFood) * 1000);
  };

  //Grams' of food function calling

  const gramsOfFood = calcGramsOfFood();

  // Form that hiddes

  document.querySelector("#hideForm").style.display = "none";

  // Result content

  document.querySelector("#output").textContent =
    weight > 0 && caloriesOfFood > 0
      ? `${nameCat} should eat ${gramsOfFood} grams of ${nameCatFood} daily 😺`
      : `Upss!😅 Please try again to enter correctly the weight and calories of food`;

  // Refresh button that appers after submitting
  document.querySelector("#refreshButton").style.display = "block";
});

// CLICK ON TRY AGAIN BUTTON
document
  .querySelector("#refreshButton")
  .addEventListener("click", function refreshPage() {
    window.location.reload();
  });
