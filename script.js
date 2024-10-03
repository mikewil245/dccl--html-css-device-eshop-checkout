document.addEventListener("DOMContentLoaded", (e) => {
  const forms = document.getElementById("forms");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const selectOption = document.getElementById("countries");
  const postalCodeInput = document.getElementById("postal-code");

  const nameError = nameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const selectError = selectOption.nextElementSibling;
  const postalError = postalCodeInput.nextElementSibling;

  function showError(input, borderError) {
    input.classList.remove("hidden");
    borderError.classList.add("borderr");
  }

  function hideError(input, borderError) {
    input.classList.add("hidden");
    borderError.classList.remove("borderr");
  }

  function validateName() {
    let name = nameInput.value;
    if (name === "") {
      showError(nameError, nameInput);

      return false;
    } else {
      hideError(nameError, nameInput);
      return true;
    }
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(emailError, emailInput);
      return false;
    } else {
      hideError(emailError, emailInput);
      return true;
    }
  }

  function validateSelection() {
    const selectOp = selectOption.value;

    if (selectOp === "") {
      // Display an error message or alert
      showError(selectError, selectOption);
      return false;
    } else {
      hideError(selectError, selectOption);
      return true;
    }
  }

  function validateArea() {
    const location = parseInt(postalCodeInput.value);
    if (isNaN(location)) {
      showError(postalError, postalCodeInput);
      return false;
    } else {
      hideError(postalError, postalCodeInput);
      return true;
    }
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  selectOption.addEventListener("change", validateSelection);
  postalCodeInput.addEventListener("input", validateArea);

  forms.addEventListener("submit", (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSelectionValid = validateSelection();
    const isPostalCodeValid = validateArea();
    if (isNameValid && isEmailValid && isSelectionValid && isPostalCodeValid) {
      alert("form is good !");
      forms.reset();
    } else {
      alert("be sure to fill out entire form !");
    }
  });
});
