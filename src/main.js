/* eslint-disable */
import "bootstrap";
import "./style.css";
/*const errorMsg = str => {
  var errorMsg = document.querySelector("#errorMsg");
  errorMsg.classList.contains("d-none") && errorMsg.classList.toggle("d-none");
  errorMsg.innerHTML += "<li>" + str + "</li>";
};*/

window.validation = function validation() {
  var inputCardNumber = document.querySelector("#inputCardNumber");
  var inputCVC = document.querySelector("#inputCVC");
  var inputAmount = document.querySelector("#inputAmount");
  var inputFirstName = document.querySelector("#inputFirstName");
  var inputLastName = document.querySelector("#inputLastName");
  var inputCity = document.querySelector("#inputCity");
  var inputState = document.querySelector("#inputState");
  var inputPostalCode = document.querySelector("#inputPostalCode");
  var errorMsg = document.querySelector("#errorMsg");
  if (inputCardNumber.value < 1000000000000000) {
    errorMsg.innerHTML = "Please enter the 16 digits of your credit card.";
    return false;
  }
  if (inputCVC.value == "") {
    errorMsg.innerHTML = "Please enter the 3 digits of your CVC.";
    return false;
  }
  if (inputAmount.value == "") {
    errorMsg.innerHTML = "Please enter the amount.";
    return false;
  }
  if (inputFirstName.length < 2) {
    errorMsg.innerHTML = "Please enter your first name.";
    return false;
  }
  if (inputLastName.length < 2) {
    errorMsg.innerHTML = "Please enter your last name.";
    return false;
  }
  if (inputCity.length < 3) {
    errorMsg.innerHTML = "Please enter the city you reside in.";
    return false;
  }
  if (inputState.value == "option") {
    errorMsg.innerHTML = "Please enter the state you reside in.";
    return false;
  }
  if (inputPostalCode.value == "") {
    errorMsg.innerHTML = "Please enter the postal code you reside in.";
    return false;
  }
};
