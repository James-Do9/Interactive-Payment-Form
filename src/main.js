/* eslint-disable */
import "bootstrap";
import "./style.css";
const errorMsg = str => {
  let errorBox = document.querySelector("#errorMsg");
  errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML += "<li>" + str + "</li>";
};

window.validation = function validation() {
  var errorBox = document.querySelector("#errorMsg");
  errorBox.innerHTML = "";
  var inputCardNumber = document.querySelector("#inputCardNumber");
  var inputCVC = document.querySelector("#inputCVC");
  var inputAmount = document.querySelector("#inputAmount");
  var inputFirstName = document.querySelector("#inputFirstName");
  var inputLastName = document.querySelector("#inputLastName");
  var inputCity = document.querySelector("#inputCity");
  var inputState = document.querySelector("#inputState");
  var inputPostalCode = document.querySelector("#inputPostalCode");

  if (inputCardNumber.value < 1000000000000000) {
    errorMsg("Please enter the 16 digits of your credit card.");
    inputCardNumber.classList.add("invalid");
  }
  if (inputCVC.value == "") {
    errorMsg("Please enter the 3 digits of your CVC.");
    inputCVC.classList.add("invalid");
  }
  if (inputAmount.value == "") {
    errorMsg("Please enter the amount.");
    inputAmount.classList.add("invalid");
  }
  if (inputFirstName.value.length < 2) {
    errorMsg("Please enter your first name.");
    inputFirstName.classList.add("invalid");
  }
  if (inputLastName.value.length < 2) {
    errorMsg("Please enter your last name.");
    inputLastName.classList.add("invalid");
  }
  if (inputCity.value.length < 3) {
    errorMsg("Please enter the city you reside in.");
    inputCity.classList.add("invalid");
  }
  if (inputState.value == "option") {
    errorMsg("Please enter the state you reside in.");
    inputState.classList.add("invalid");
  }
  if (inputPostalCode.value == "") {
    errorMsg("Please enter the postal code you reside in.");
    inputPostalCode.classList.add("invalid");
  }
};
