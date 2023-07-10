const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const submitBtn = document.querySelector("#submit-btn");
const passwordInput = document.querySelector("#password-input");
const emailInput = document.querySelector("#email-input");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  (isFirstNameOK = false),
    (isLastNameOK = false),
    (isEmailOK = false),
    (isPasswordOK = false),
    "" === firstNameInput
      ? firstNameInput.classList.add("is-invalid")
      : firstNameInput.classList.add("is-valid"),
    (isFirstNameOK = true),
    "" === lastNameInput
      ? lastNameInput.classList.add("is-invalid")
      : lastNameInput.classList.add("is-valid"),
    (isLastNameOK = true),
    !1 === validateEmail(emailInput.value)
      ? emailInput.classList.add("is-invalid")
      : emailInput.classList.add("is-valid"),
    (isEmailOK = true),
    passwordInput.value.length >= 6
      ? (passwordInput.classList.add("is-valid"), (isPasswordOK = true))
      : passwordInput.classList.add("is-invalid"),
    isFirstNameOK &&
      isLastNameOK &&
      isEmailOK &&
      isPasswordOK &&
      alert("Registered successfully");
};
