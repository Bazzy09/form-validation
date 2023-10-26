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
})

