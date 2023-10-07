document.addEventListener("DOMContentLoaded", function () {
        const paymentForm = document.querySelector("form[action='process_payment.php']");

        paymentForm.addEventListener("submit", function (event) {
            // Validate email
            const emailInput = document.querySelector("input[type='email']");
            const email = emailInput.value;

            if (!isValidEmail(email)) {
                event.preventDefault();
                alert("Invalid email address. Please enter a valid email.");
                emailInput.focus();
                return;
            }

            // Validate card number
            const cardNumberInput = document.getElementById("card-number");
            const cardNumber = cardNumberInput.value.replace(/-/g, ''); // Remove dashes

            if (!isValidCardNumber(cardNumber)) {
                event.preventDefault();
                alert("Invalid card number. Please enter a valid card number.");
                cardNumberInput.focus();
                return;
            }

            // Validate CVV
            const cvvInput = document.querySelector("input[name='cvv']");
            const cvv = cvvInput.value;

            if (!isValidCVV(cvv)) {
                event.preventDefault();
                alert("Invalid CVV. Please enter a valid CVV.");
                cvvInput.focus();
                return;
            }
        });

        function isValidEmail(email) {
            // Simple email validation regex (you can use a more robust one)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidCardNumber(cardNumber) {
            // Simple card number validation (16 digits)
            return /^\d{16}$/.test(cardNumber);
        }

        function isValidCVV(cvv) {
            // Simple CVV validation (3 or 4 digits)
            return /^\d{3,4}$/.test(cvv);
        }
    });
