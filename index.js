const formElement = document.querySelector(".email-form");
const emailInput = document.querySelector("#email");

formElement.addEventListener("submit", e => {
  e.preventDefault();

  const input = emailInput.value.trim();

  if (input === "") {
    setError("Whoops! It looks like you forgot to add your email");
  } else if (!isEmail(input)) {
    setError("Please provide a valid email address");
  } else {
    setValid("Thanks! We'll keep you updated!");
  }

  function setError(message) {
    emailInput.className = "error";
    errorElement.innerText = message;
    errorElement.style.display = "block";
  }

  function setValid(message) {
    emailInput.className = "valid";
    errorElement.innerText = message;
    errorElement.style.display = "block";
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
});
