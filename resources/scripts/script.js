document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const zipCode = document.getElementById("zipCode");
    const password = document.getElementById("password");
    const passwordConfirmation = document.getElementById("passwordConfirmation");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");

    function showError(field, errorDiv, message) {
        field.classList.add("invalid");
        errorDiv.textContent = message;
    }

    function clearError(field, errorDiv) {
        field.classList.remove("invalid");
        errorDiv.textContent = "";
    }

    function validateEmail() {
        if (email.validity.valueMissing) {
            showError(email, emailError, "Email is required.");
        } else if (email.validity.typeMismatch) {
            showError(email, emailError, "Invalid email format.");
        } else {
            clearError(email, emailError);
        }
    }

      function validateCountry() {
        if (country.validity.valueMissing) {
            showError(country, countryError, "Country is required.");
        } else {
            clearError(country, countryError);
        }
    }

    function validateZipCode() {
        if (zipCode.validity.valueMissing) {
            showError(zipCode, zipCodeError, "Zip Code is required.");
        } else {
            clearError(zipCode, zipCodeError);
        }
    }
     function validatePassword() {
        if (password.validity.valueMissing) {
            showError(password, passwordError, "Password is required.");
        } else {
            clearError(password, passwordError);
        }
    }

    function validatePasswordConfirmation() {
        if (passwordConfirmation.validity.valueMissing) {
            showError(passwordConfirmation, passwordConfirmationError, "Password confirmation is required.");
        } else if (passwordConfirmation.value !== password.value) {
            showError(passwordConfirmation, passwordConfirmationError, "Passwords do not match.");
        } else {
            clearError(passwordConfirmation, passwordConfirmationError);
        }
    }

    email.addEventListener("input", validateEmail);
    country.addEventListener("input", validateCountry);
    zipCode.addEventListener("input", validateZipCode);
    password.addEventListener("input", validatePassword);
    passwordConfirmation.addEventListener("input", validatePasswordConfirmation);

    submitBtn.addEventListener("click", function () {
        validateEmail();
        validateCountry();
        validateZipCode();
        validatePassword();
        validatePasswordConfirmation();

        if (form.checkValidity()) {
            form.style.display = "none";
            successMessage.textContent = "High five! Form submitted successfully.";
        }
    });
});

