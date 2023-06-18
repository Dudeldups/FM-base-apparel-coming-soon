const formElement = document.querySelector(".email-form");
const emailInput = formElement.querySelector("#email");
const errorMessageElement = formElement.querySelector(
  ".email-form__input__error-message"
);
const errorIcon = formElement.querySelector(".email-form__input__error-icon");

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
    if (emailInput.classList.contains("valid")) {
      emailInput.classList.remove("valid");
    }
    emailInput.classList.add("error");
    errorMessageElement.innerText = message;
  }

  function setValid(message) {
    if (emailInput.classList.contains("error")) {
      emailInput.classList.remove("error");
    }
    emailInput.classList.add("valid");
    errorMessageElement.innerText = message;
    emailInput.value = "";
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
});
