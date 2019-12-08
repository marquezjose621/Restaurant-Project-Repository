const email = document.getElementById("Email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid e-mail!");
  } else {
    email.setCustomValidity("");
  }
});